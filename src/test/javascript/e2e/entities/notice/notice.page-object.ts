import { element, by, ElementFinder } from 'protractor';

export class NoticeComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-notice div table .btn-danger'));
  title = element.all(by.css('jhi-notice div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class NoticeUpdatePage {
  pageTitle = element(by.id('jhi-notice-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  titleInput = element(by.id('field_title'));
  descriptionInput = element(by.id('field_description'));
  imageurlInput = element(by.id('field_imageurl'));
  urlInput = element(by.id('field_url'));
  hashtagsInput = element(by.id('field_hashtags'));

  authorSelect = element(by.id('field_author'));
  boardSelect = element(by.id('field_board'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTitleInput(title: string): Promise<void> {
    await this.titleInput.sendKeys(title);
  }

  async getTitleInput(): Promise<string> {
    return await this.titleInput.getAttribute('value');
  }

  async setDescriptionInput(description: string): Promise<void> {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput(): Promise<string> {
    return await this.descriptionInput.getAttribute('value');
  }

  async setImageurlInput(imageurl: string): Promise<void> {
    await this.imageurlInput.sendKeys(imageurl);
  }

  async getImageurlInput(): Promise<string> {
    return await this.imageurlInput.getAttribute('value');
  }

  async setUrlInput(url: string): Promise<void> {
    await this.urlInput.sendKeys(url);
  }

  async getUrlInput(): Promise<string> {
    return await this.urlInput.getAttribute('value');
  }

  async setHashtagsInput(hashtags: string): Promise<void> {
    await this.hashtagsInput.sendKeys(hashtags);
  }

  async getHashtagsInput(): Promise<string> {
    return await this.hashtagsInput.getAttribute('value');
  }

  async authorSelectLastOption(): Promise<void> {
    await this.authorSelect.all(by.tagName('option')).last().click();
  }

  async authorSelectOption(option: string): Promise<void> {
    await this.authorSelect.sendKeys(option);
  }

  getAuthorSelect(): ElementFinder {
    return this.authorSelect;
  }

  async getAuthorSelectedOption(): Promise<string> {
    return await this.authorSelect.element(by.css('option:checked')).getText();
  }

  async boardSelectLastOption(): Promise<void> {
    await this.boardSelect.all(by.tagName('option')).last().click();
  }

  async boardSelectOption(option: string): Promise<void> {
    await this.boardSelect.sendKeys(option);
  }

  getBoardSelect(): ElementFinder {
    return this.boardSelect;
  }

  async getBoardSelectedOption(): Promise<string> {
    return await this.boardSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class NoticeDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-notice-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-notice'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
