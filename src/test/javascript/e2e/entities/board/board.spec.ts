import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { BoardComponentsPage, BoardDeleteDialog, BoardUpdatePage } from './board.page-object';

const expect = chai.expect;

describe('Board e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let boardComponentsPage: BoardComponentsPage;
  let boardUpdatePage: BoardUpdatePage;
  let boardDeleteDialog: BoardDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Boards', async () => {
    await navBarPage.goToEntity('board');
    boardComponentsPage = new BoardComponentsPage();
    await browser.wait(ec.visibilityOf(boardComponentsPage.title), 5000);
    expect(await boardComponentsPage.getTitle()).to.eq('jhipsterNoticeBoardApp.board.home.title');
    await browser.wait(ec.or(ec.visibilityOf(boardComponentsPage.entities), ec.visibilityOf(boardComponentsPage.noResult)), 1000);
  });

  it('should load create Board page', async () => {
    await boardComponentsPage.clickOnCreateButton();
    boardUpdatePage = new BoardUpdatePage();
    expect(await boardUpdatePage.getPageTitle()).to.eq('jhipsterNoticeBoardApp.board.home.createOrEditLabel');
    await boardUpdatePage.cancel();
  });

  it('should create and save Boards', async () => {
    const nbButtonsBeforeCreate = await boardComponentsPage.countDeleteButtons();

    await boardComponentsPage.clickOnCreateButton();

    await promise.all([boardUpdatePage.setTitleInput('title')]);

    expect(await boardUpdatePage.getTitleInput()).to.eq('title', 'Expected Title value to be equals to title');

    await boardUpdatePage.save();
    expect(await boardUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await boardComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Board', async () => {
    const nbButtonsBeforeDelete = await boardComponentsPage.countDeleteButtons();
    await boardComponentsPage.clickOnLastDeleteButton();

    boardDeleteDialog = new BoardDeleteDialog();
    expect(await boardDeleteDialog.getDialogTitle()).to.eq('jhipsterNoticeBoardApp.board.delete.question');
    await boardDeleteDialog.clickOnConfirmButton();

    expect(await boardComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
