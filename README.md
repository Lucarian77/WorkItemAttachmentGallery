# Work Item Attachment Gallery

Work Item Attachment Gallery is an Azure DevOps extension that adds a clean attachment management panel to Azure Boards work item forms.

It helps users preview image attachments, open and download files, upload new attachments, rename attachments, update attachment comments, and remove attachments from work items.

## Features

- Preview image attachments directly in the work item form.
- Open and download work item attachments.
- Upload one or more files.
- Add an optional comment during upload.
- Rename attachments.
- Edit attachment comments.
- Remove attachments from the work item.
- Display friendly file tiles for common document, archive, email, text, and code/config formats.
- Avoid broken image thumbnails by downloading previews through the Azure DevOps extension token.

## Supported image previews

Inline preview is provided for image attachments:

- PNG
- JPG/JPEG
- GIF
- BMP
- WEBP
- SVG

Other attachment types are shown as file tiles with Open and Download actions.
<img width="842" height="947" alt="image" src="https://github.com/user-attachments/assets/cd64d79f-61ea-4f16-9064-3cbbd8fd913e" />
<img width="807" height="1307" alt="image" src="https://github.com/user-attachments/assets/c539a144-ecad-4294-b04f-82b9ecc3ca36" />
<img width="767" height="857" alt="image" src="https://github.com/user-attachments/assets/a86229b9-e60e-4d2c-a097-50ddb09e289e" />


## Supported file tiles

Common non-image attachment types are displayed with recognizable file-type tiles, including:

- Word: DOC, DOCX, RTF
- Excel/data: XLS, XLSX, CSV
- PowerPoint: PPT, PPTX
- PDF
- Archives: ZIP, RAR, 7Z
- Text/logs: TXT, LOG, MD
- Code/config: JSON, XML, HTML, CSS, JS, TS
- Email: MSG, EML
- Generic files

## Permissions

This extension requests **Work items (read and write)** so it can read work item attachment relations and perform attachment management actions such as upload, rename, comment update, and remove.

## Notes

Removing an attachment from the gallery removes the attachment relation from the work item. The extension does not permanently purge files from Azure DevOps storage.

## Marketplace

This extension is available on the Visual Studio Marketplace as:

**Work Item Attachment Gallery**

## Support

Please report issues using GitHub Issues.

## Privacy

This extension does not send attachment data to external services. See `PRIVACY.md` for details.
