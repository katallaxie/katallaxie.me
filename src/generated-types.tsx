import { gql } from '@apollo/client'
import * as React from 'react'
import * as Apollo from '@apollo/client'
import * as ApolloReactComponents from '@apollo/client/react/components'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any
  Hex: any
  /** Raw JSON value */
  Json: any
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
  RGBAHue: any
  RGBATransparency: any
  /** Slate-compatible RichText AST */
  RichTextAST: any
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** System stage field */
  stage: Stage
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** The file handle */
  handle: Scalars['String']
  /** The file name */
  fileName: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** The file width */
  width?: Maybe<Scalars['Float']>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  /** List of Asset versions */
  history: Array<Version>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>
  includeCurrent?: Scalars['Boolean']
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<AssetEdge>
  aggregate: Aggregate
}

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** The item at the end of the edge. */
  node: Asset
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
}

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>
  document?: Maybe<DocumentTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>
}

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>
}

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput
  /** Update many input */
  data: AssetUpdateManyInput
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput
  /** Document to update */
  data: AssetUpdateInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput
  create: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput
  /** Upsert data */
  data: AssetUpsertInput
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  handle?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  hex: Scalars['Hex']
  rgba: Rgba
  css: Scalars['String']
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>
  rgba?: Maybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>
}

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>
}

export type Link = Node & {
  __typename?: 'Link'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Link>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  menu?: Maybe<Menu>
  title: Scalars['String']
  href: Scalars['String']
  alt?: Maybe<Scalars['String']>
  pageRefs?: Maybe<Page>
  /** List of Link versions */
  history: Array<Version>
}

export type LinkDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type LinkMenuArgs = {
  locales?: Maybe<Array<Locale>>
}

export type LinkPageRefsArgs = {
  locales?: Maybe<Array<Locale>>
}

export type LinkHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type LinkConnectInput = {
  /** Document to connect */
  where: LinkWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type LinkConnection = {
  __typename?: 'LinkConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<LinkEdge>
  aggregate: Aggregate
}

export type LinkCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  menu?: Maybe<MenuCreateOneInlineInput>
  title: Scalars['String']
  href: Scalars['String']
  alt?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageCreateOneInlineInput>
}

export type LinkCreateManyInlineInput = {
  /** Create and connect multiple existing Link documents */
  create?: Maybe<Array<LinkCreateInput>>
  /** Connect multiple existing Link documents */
  connect?: Maybe<Array<LinkWhereUniqueInput>>
}

export type LinkCreateOneInlineInput = {
  /** Create and connect one Link document */
  create?: Maybe<LinkCreateInput>
  /** Connect one existing Link document */
  connect?: Maybe<LinkWhereUniqueInput>
}

/** An edge in a connection. */
export type LinkEdge = {
  __typename?: 'LinkEdge'
  /** The item at the end of the edge. */
  node: Link
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type LinkManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LinkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LinkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LinkWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  menu?: Maybe<MenuWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  href_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  href_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  href_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  href_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  href_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  href_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  href_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  href_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  href_not_ends_with?: Maybe<Scalars['String']>
  alt?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  alt_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  alt_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  alt_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  alt_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  alt_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  alt_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  alt_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  alt_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  alt_not_ends_with?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageWhereInput>
}

export enum LinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC'
}

export type LinkUpdateInput = {
  menu?: Maybe<MenuUpdateOneInlineInput>
  title?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  alt?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageUpdateOneInlineInput>
}

export type LinkUpdateManyInlineInput = {
  /** Create and connect multiple Link documents */
  create?: Maybe<Array<LinkCreateInput>>
  /** Connect multiple existing Link documents */
  connect?: Maybe<Array<LinkConnectInput>>
  /** Override currently-connected documents with multiple existing Link documents */
  set?: Maybe<Array<LinkWhereUniqueInput>>
  /** Update multiple Link documents */
  update?: Maybe<Array<LinkUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Link documents */
  upsert?: Maybe<Array<LinkUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Link documents */
  disconnect?: Maybe<Array<LinkWhereUniqueInput>>
  /** Delete multiple Link documents */
  delete?: Maybe<Array<LinkWhereUniqueInput>>
}

export type LinkUpdateManyInput = {
  title?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  alt?: Maybe<Scalars['String']>
}

export type LinkUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: LinkWhereInput
  /** Update many input */
  data: LinkUpdateManyInput
}

export type LinkUpdateOneInlineInput = {
  /** Create and connect one Link document */
  create?: Maybe<LinkCreateInput>
  /** Update single Link document */
  update?: Maybe<LinkUpdateWithNestedWhereUniqueInput>
  /** Upsert single Link document */
  upsert?: Maybe<LinkUpsertWithNestedWhereUniqueInput>
  /** Connect existing Link document */
  connect?: Maybe<LinkWhereUniqueInput>
  /** Disconnect currently connected Link document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Link document */
  delete?: Maybe<Scalars['Boolean']>
}

export type LinkUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: LinkWhereUniqueInput
  /** Document to update */
  data: LinkUpdateInput
}

export type LinkUpsertInput = {
  /** Create document if it didn't exist */
  create: LinkCreateInput
  /** Update document if it exists */
  update: LinkUpdateInput
}

export type LinkUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: LinkWhereUniqueInput
  /** Upsert data */
  data: LinkUpsertInput
}

/** Identifies documents */
export type LinkWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LinkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LinkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LinkWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  menu?: Maybe<MenuWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  href_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  href_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  href_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  href_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  href_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  href_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  href_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  href_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  href_not_ends_with?: Maybe<Scalars['String']>
  alt?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  alt_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  alt_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  alt_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  alt_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  alt_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  alt_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  alt_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  alt_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  alt_not_ends_with?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageWhereInput>
}

/** References Link record uniquely */
export type LinkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  distance: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Menu = Node & {
  __typename?: 'Menu'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Menu>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  menu: Array<MenuMenu>
  pageMenu?: Maybe<Page>
  /** List of Menu versions */
  history: Array<Version>
}

export type MenuDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type MenuMenuArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<Locale>>
}

export type MenuPageMenuArgs = {
  locales?: Maybe<Array<Locale>>
}

export type MenuHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type MenuConnectInput = {
  /** Document to connect */
  where: MenuWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type MenuConnection = {
  __typename?: 'MenuConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<MenuEdge>
  aggregate: Aggregate
}

export type MenuCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  menu?: Maybe<MenuMenuCreateManyInlineInput>
  pageMenu?: Maybe<PageCreateOneInlineInput>
}

export type MenuCreateManyInlineInput = {
  /** Create and connect multiple existing Menu documents */
  create?: Maybe<Array<MenuCreateInput>>
  /** Connect multiple existing Menu documents */
  connect?: Maybe<Array<MenuWhereUniqueInput>>
}

export type MenuCreateOneInlineInput = {
  /** Create and connect one Menu document */
  create?: Maybe<MenuCreateInput>
  /** Connect one existing Menu document */
  connect?: Maybe<MenuWhereUniqueInput>
}

/** An edge in a connection. */
export type MenuEdge = {
  __typename?: 'MenuEdge'
  /** The item at the end of the edge. */
  node: Menu
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type MenuManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MenuWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MenuWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MenuWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  pageMenu?: Maybe<PageWhereInput>
}

export type MenuMenu = Link

export type MenuMenuConnectInput = {
  Link?: Maybe<LinkConnectInput>
}

export type MenuMenuCreateInput = {
  Link?: Maybe<LinkCreateInput>
}

export type MenuMenuCreateManyInlineInput = {
  /** Create and connect multiple existing MenuMenu documents */
  create?: Maybe<Array<MenuMenuCreateInput>>
  /** Connect multiple existing MenuMenu documents */
  connect?: Maybe<Array<MenuMenuWhereUniqueInput>>
}

export type MenuMenuCreateOneInlineInput = {
  /** Create and connect one MenuMenu document */
  create?: Maybe<MenuMenuCreateInput>
  /** Connect one existing MenuMenu document */
  connect?: Maybe<MenuMenuWhereUniqueInput>
}

export type MenuMenuUpdateInput = {
  Link?: Maybe<LinkUpdateInput>
}

export type MenuMenuUpdateManyInlineInput = {
  /** Create and connect multiple MenuMenu documents */
  create?: Maybe<Array<MenuMenuCreateInput>>
  /** Connect multiple existing MenuMenu documents */
  connect?: Maybe<Array<MenuMenuConnectInput>>
  /** Override currently-connected documents with multiple existing MenuMenu documents */
  set?: Maybe<Array<MenuMenuWhereUniqueInput>>
  /** Update multiple MenuMenu documents */
  update?: Maybe<Array<MenuMenuUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple MenuMenu documents */
  upsert?: Maybe<Array<MenuMenuUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple MenuMenu documents */
  disconnect?: Maybe<Array<MenuMenuWhereUniqueInput>>
  /** Delete multiple MenuMenu documents */
  delete?: Maybe<Array<MenuMenuWhereUniqueInput>>
}

export type MenuMenuUpdateManyWithNestedWhereInput = {
  Link?: Maybe<LinkUpdateManyWithNestedWhereInput>
}

export type MenuMenuUpdateOneInlineInput = {
  /** Create and connect one MenuMenu document */
  create?: Maybe<MenuMenuCreateInput>
  /** Update single MenuMenu document */
  update?: Maybe<MenuMenuUpdateWithNestedWhereUniqueInput>
  /** Upsert single MenuMenu document */
  upsert?: Maybe<MenuMenuUpsertWithNestedWhereUniqueInput>
  /** Connect existing MenuMenu document */
  connect?: Maybe<MenuMenuWhereUniqueInput>
  /** Disconnect currently connected MenuMenu document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected MenuMenu document */
  delete?: Maybe<Scalars['Boolean']>
}

export type MenuMenuUpdateWithNestedWhereUniqueInput = {
  Link?: Maybe<LinkUpdateWithNestedWhereUniqueInput>
}

export type MenuMenuUpsertWithNestedWhereUniqueInput = {
  Link?: Maybe<LinkUpsertWithNestedWhereUniqueInput>
}

export type MenuMenuWhereInput = {
  Link?: Maybe<LinkWhereInput>
}

export type MenuMenuWhereUniqueInput = {
  Link?: Maybe<LinkWhereUniqueInput>
}

export enum MenuOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type MenuUpdateInput = {
  title?: Maybe<Scalars['String']>
  menu?: Maybe<MenuMenuUpdateManyInlineInput>
  pageMenu?: Maybe<PageUpdateOneInlineInput>
}

export type MenuUpdateManyInlineInput = {
  /** Create and connect multiple Menu documents */
  create?: Maybe<Array<MenuCreateInput>>
  /** Connect multiple existing Menu documents */
  connect?: Maybe<Array<MenuConnectInput>>
  /** Override currently-connected documents with multiple existing Menu documents */
  set?: Maybe<Array<MenuWhereUniqueInput>>
  /** Update multiple Menu documents */
  update?: Maybe<Array<MenuUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Menu documents */
  upsert?: Maybe<Array<MenuUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Menu documents */
  disconnect?: Maybe<Array<MenuWhereUniqueInput>>
  /** Delete multiple Menu documents */
  delete?: Maybe<Array<MenuWhereUniqueInput>>
}

export type MenuUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>
}

export type MenuUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: MenuWhereInput
  /** Update many input */
  data: MenuUpdateManyInput
}

export type MenuUpdateOneInlineInput = {
  /** Create and connect one Menu document */
  create?: Maybe<MenuCreateInput>
  /** Update single Menu document */
  update?: Maybe<MenuUpdateWithNestedWhereUniqueInput>
  /** Upsert single Menu document */
  upsert?: Maybe<MenuUpsertWithNestedWhereUniqueInput>
  /** Connect existing Menu document */
  connect?: Maybe<MenuWhereUniqueInput>
  /** Disconnect currently connected Menu document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Menu document */
  delete?: Maybe<Scalars['Boolean']>
}

export type MenuUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MenuWhereUniqueInput
  /** Document to update */
  data: MenuUpdateInput
}

export type MenuUpsertInput = {
  /** Create document if it didn't exist */
  create: MenuCreateInput
  /** Update document if it exists */
  update: MenuUpdateInput
}

export type MenuUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MenuWhereUniqueInput
  /** Upsert data */
  data: MenuUpsertInput
}

/** Identifies documents */
export type MenuWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MenuWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MenuWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MenuWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  pageMenu?: Maybe<PageWhereInput>
}

/** References Menu record uniquely */
export type MenuWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Create one link */
  createLink?: Maybe<Link>
  /** Update one link */
  updateLink?: Maybe<Link>
  /** Delete one link from _all_ existing stages. Returns deleted document. */
  deleteLink?: Maybe<Link>
  /** Upsert one link */
  upsertLink?: Maybe<Link>
  /** Publish one link */
  publishLink?: Maybe<Link>
  /** Unpublish one link from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLink?: Maybe<Link>
  /** Update many Link documents */
  updateManyLinksConnection: LinkConnection
  /** Delete many Link documents, return deleted documents */
  deleteManyLinksConnection: LinkConnection
  /** Publish many Link documents */
  publishManyLinksConnection: LinkConnection
  /** Find many Link documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLinksConnection: LinkConnection
  /**
   * Update many links
   * @deprecated Please use the new paginated many mutation (updateManyLinksConnection)
   */
  updateManyLinks: BatchPayload
  /**
   * Delete many Link documents
   * @deprecated Please use the new paginated many mutation (deleteManyLinksConnection)
   */
  deleteManyLinks: BatchPayload
  /**
   * Publish many Link documents
   * @deprecated Please use the new paginated many mutation (publishManyLinksConnection)
   */
  publishManyLinks: BatchPayload
  /**
   * Unpublish many Link documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLinksConnection)
   */
  unpublishManyLinks: BatchPayload
  /** Create one menu */
  createMenu?: Maybe<Menu>
  /** Update one menu */
  updateMenu?: Maybe<Menu>
  /** Delete one menu from _all_ existing stages. Returns deleted document. */
  deleteMenu?: Maybe<Menu>
  /** Upsert one menu */
  upsertMenu?: Maybe<Menu>
  /** Publish one menu */
  publishMenu?: Maybe<Menu>
  /** Unpublish one menu from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMenu?: Maybe<Menu>
  /** Update many Menu documents */
  updateManyMenusConnection: MenuConnection
  /** Delete many Menu documents, return deleted documents */
  deleteManyMenusConnection: MenuConnection
  /** Publish many Menu documents */
  publishManyMenusConnection: MenuConnection
  /** Find many Menu documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMenusConnection: MenuConnection
  /**
   * Update many menus
   * @deprecated Please use the new paginated many mutation (updateManyMenusConnection)
   */
  updateManyMenus: BatchPayload
  /**
   * Delete many Menu documents
   * @deprecated Please use the new paginated many mutation (deleteManyMenusConnection)
   */
  deleteManyMenus: BatchPayload
  /**
   * Publish many Menu documents
   * @deprecated Please use the new paginated many mutation (publishManyMenusConnection)
   */
  publishManyMenus: BatchPayload
  /**
   * Unpublish many Menu documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMenusConnection)
   */
  unpublishManyMenus: BatchPayload
  /** Create one page */
  createPage?: Maybe<Page>
  /** Update one page */
  updatePage?: Maybe<Page>
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>
  /** Upsert one page */
  upsertPage?: Maybe<Page>
  /** Publish one page */
  publishPage?: Maybe<Page>
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload
  /** Create one post */
  createPost?: Maybe<Post>
  /** Update one post */
  updatePost?: Maybe<Post>
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>
  /** Upsert one post */
  upsertPost?: Maybe<Post>
  /** Publish one post */
  publishPost?: Maybe<Post>
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload
  /** Create one tag */
  createTag?: Maybe<Tag>
  /** Update one tag */
  updateTag?: Maybe<Tag>
  /** Delete one tag from _all_ existing stages. Returns deleted document. */
  deleteTag?: Maybe<Tag>
  /** Upsert one tag */
  upsertTag?: Maybe<Tag>
  /** Publish one tag */
  publishTag?: Maybe<Tag>
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTag?: Maybe<Tag>
  /** Update many Tag documents */
  updateManyTagsConnection: TagConnection
  /** Delete many Tag documents, return deleted documents */
  deleteManyTagsConnection: TagConnection
  /** Publish many Tag documents */
  publishManyTagsConnection: TagConnection
  /** Find many Tag documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTagsConnection: TagConnection
  /**
   * Update many tags
   * @deprecated Please use the new paginated many mutation (updateManyTagsConnection)
   */
  updateManyTags: BatchPayload
  /**
   * Delete many Tag documents
   * @deprecated Please use the new paginated many mutation (deleteManyTagsConnection)
   */
  deleteManyTags: BatchPayload
  /**
   * Publish many Tag documents
   * @deprecated Please use the new paginated many mutation (publishManyTagsConnection)
   */
  publishManyTags: BatchPayload
  /**
   * Unpublish many Tag documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTagsConnection)
   */
  unpublishManyTags: BatchPayload
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput
  data: AssetUpdateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput
  upsert: AssetUpsertInput
}

export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
  to?: Array<Stage>
}

export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>
  data: AssetUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  data: AssetUpdateManyInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
}

export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  to?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
}

export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationCreateLinkArgs = {
  data: LinkCreateInput
}

export type MutationUpdateLinkArgs = {
  where: LinkWhereUniqueInput
  data: LinkUpdateInput
}

export type MutationDeleteLinkArgs = {
  where: LinkWhereUniqueInput
}

export type MutationUpsertLinkArgs = {
  where: LinkWhereUniqueInput
  upsert: LinkUpsertInput
}

export type MutationPublishLinkArgs = {
  where: LinkWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishLinkArgs = {
  where: LinkWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyLinksConnectionArgs = {
  where?: Maybe<LinkManyWhereInput>
  data: LinkUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyLinksConnectionArgs = {
  where?: Maybe<LinkManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyLinksConnectionArgs = {
  where?: Maybe<LinkManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyLinksConnectionArgs = {
  where?: Maybe<LinkManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyLinksArgs = {
  where?: Maybe<LinkManyWhereInput>
  data: LinkUpdateManyInput
}

export type MutationDeleteManyLinksArgs = {
  where?: Maybe<LinkManyWhereInput>
}

export type MutationPublishManyLinksArgs = {
  where?: Maybe<LinkManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyLinksArgs = {
  where?: Maybe<LinkManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateMenuArgs = {
  data: MenuCreateInput
}

export type MutationUpdateMenuArgs = {
  where: MenuWhereUniqueInput
  data: MenuUpdateInput
}

export type MutationDeleteMenuArgs = {
  where: MenuWhereUniqueInput
}

export type MutationUpsertMenuArgs = {
  where: MenuWhereUniqueInput
  upsert: MenuUpsertInput
}

export type MutationPublishMenuArgs = {
  where: MenuWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishMenuArgs = {
  where: MenuWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyMenusConnectionArgs = {
  where?: Maybe<MenuManyWhereInput>
  data: MenuUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyMenusConnectionArgs = {
  where?: Maybe<MenuManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyMenusConnectionArgs = {
  where?: Maybe<MenuManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyMenusConnectionArgs = {
  where?: Maybe<MenuManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyMenusArgs = {
  where?: Maybe<MenuManyWhereInput>
  data: MenuUpdateManyInput
}

export type MutationDeleteManyMenusArgs = {
  where?: Maybe<MenuManyWhereInput>
}

export type MutationPublishManyMenusArgs = {
  where?: Maybe<MenuManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyMenusArgs = {
  where?: Maybe<MenuManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreatePageArgs = {
  data: PageCreateInput
}

export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput
  data: PageUpdateInput
}

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput
}

export type MutationUpsertPageArgs = {
  where: PageWhereUniqueInput
  upsert: PageUpsertInput
}

export type MutationPublishPageArgs = {
  where: PageWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishPageArgs = {
  where: PageWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>
  data: PageUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>
  data: PageUpdateManyInput
}

export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>
}

export type MutationPublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreatePostArgs = {
  data: PostCreateInput
}

export type MutationUpdatePostArgs = {
  where: PostWhereUniqueInput
  data: PostUpdateInput
}

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
}

export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput
  upsert: PostUpsertInput
}

export type MutationPublishPostArgs = {
  where: PostWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishPostArgs = {
  where: PostWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>
  data: PostUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>
  data: PostUpdateManyInput
}

export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>
}

export type MutationPublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateTagArgs = {
  data: TagCreateInput
}

export type MutationUpdateTagArgs = {
  where: TagWhereUniqueInput
  data: TagUpdateInput
}

export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput
}

export type MutationUpsertTagArgs = {
  where: TagWhereUniqueInput
  upsert: TagUpsertInput
}

export type MutationPublishTagArgs = {
  where: TagWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishTagArgs = {
  where: TagWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>
  data: TagUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>
  data: TagUpdateManyInput
}

export type MutationDeleteManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>
}

export type MutationPublishManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>
  from?: Array<Stage>
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

export type Page = Node & {
  __typename?: 'Page'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Page>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  content?: Maybe<Scalars['String']>
  title: Scalars['String']
  teaser?: Maybe<Scalars['String']>
  refs: Array<PageRefs>
  pageRefs?: Maybe<Page>
  menu?: Maybe<Menu>
  description?: Maybe<Scalars['String']>
  /** List of Page versions */
  history: Array<Version>
}

export type PageDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type PageRefsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<Locale>>
}

export type PagePageRefsArgs = {
  locales?: Maybe<Array<Locale>>
}

export type PageMenuArgs = {
  locales?: Maybe<Array<Locale>>
}

export type PageHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type PageConnectInput = {
  /** Document to connect */
  where: PageWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<PageEdge>
  aggregate: Aggregate
}

export type PageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  content?: Maybe<Scalars['String']>
  title: Scalars['String']
  teaser?: Maybe<Scalars['String']>
  refs?: Maybe<PageRefsCreateManyInlineInput>
  pageRefs?: Maybe<PageCreateOneInlineInput>
  menu?: Maybe<MenuCreateOneInlineInput>
  description?: Maybe<Scalars['String']>
}

export type PageCreateManyInlineInput = {
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>
}

export type PageCreateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>
}

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge'
  /** The item at the end of the edge. */
  node: Page
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>
}

/** Identifies documents */
export type PageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  teaser?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  teaser_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  teaser_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  teaser_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  teaser_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  teaser_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  teaser_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  teaser_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  teaser_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  teaser_not_ends_with?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageWhereInput>
  menu?: Maybe<MenuWhereInput>
  description?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>
}

export enum PageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TeaserAsc = 'teaser_ASC',
  TeaserDesc = 'teaser_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export type PageRefs = Link | Page | Post

export type PageRefsConnectInput = {
  Page?: Maybe<PageConnectInput>
  Post?: Maybe<PostConnectInput>
  Link?: Maybe<LinkConnectInput>
}

export type PageRefsCreateInput = {
  Page?: Maybe<PageCreateInput>
  Post?: Maybe<PostCreateInput>
  Link?: Maybe<LinkCreateInput>
}

export type PageRefsCreateManyInlineInput = {
  /** Create and connect multiple existing PageRefs documents */
  create?: Maybe<Array<PageRefsCreateInput>>
  /** Connect multiple existing PageRefs documents */
  connect?: Maybe<Array<PageRefsWhereUniqueInput>>
}

export type PageRefsCreateOneInlineInput = {
  /** Create and connect one PageRefs document */
  create?: Maybe<PageRefsCreateInput>
  /** Connect one existing PageRefs document */
  connect?: Maybe<PageRefsWhereUniqueInput>
}

export type PageRefsUpdateInput = {
  Page?: Maybe<PageUpdateInput>
  Post?: Maybe<PostUpdateInput>
  Link?: Maybe<LinkUpdateInput>
}

export type PageRefsUpdateManyInlineInput = {
  /** Create and connect multiple PageRefs documents */
  create?: Maybe<Array<PageRefsCreateInput>>
  /** Connect multiple existing PageRefs documents */
  connect?: Maybe<Array<PageRefsConnectInput>>
  /** Override currently-connected documents with multiple existing PageRefs documents */
  set?: Maybe<Array<PageRefsWhereUniqueInput>>
  /** Update multiple PageRefs documents */
  update?: Maybe<Array<PageRefsUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple PageRefs documents */
  upsert?: Maybe<Array<PageRefsUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple PageRefs documents */
  disconnect?: Maybe<Array<PageRefsWhereUniqueInput>>
  /** Delete multiple PageRefs documents */
  delete?: Maybe<Array<PageRefsWhereUniqueInput>>
}

export type PageRefsUpdateManyWithNestedWhereInput = {
  Page?: Maybe<PageUpdateManyWithNestedWhereInput>
  Post?: Maybe<PostUpdateManyWithNestedWhereInput>
  Link?: Maybe<LinkUpdateManyWithNestedWhereInput>
}

export type PageRefsUpdateOneInlineInput = {
  /** Create and connect one PageRefs document */
  create?: Maybe<PageRefsCreateInput>
  /** Update single PageRefs document */
  update?: Maybe<PageRefsUpdateWithNestedWhereUniqueInput>
  /** Upsert single PageRefs document */
  upsert?: Maybe<PageRefsUpsertWithNestedWhereUniqueInput>
  /** Connect existing PageRefs document */
  connect?: Maybe<PageRefsWhereUniqueInput>
  /** Disconnect currently connected PageRefs document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected PageRefs document */
  delete?: Maybe<Scalars['Boolean']>
}

export type PageRefsUpdateWithNestedWhereUniqueInput = {
  Page?: Maybe<PageUpdateWithNestedWhereUniqueInput>
  Post?: Maybe<PostUpdateWithNestedWhereUniqueInput>
  Link?: Maybe<LinkUpdateWithNestedWhereUniqueInput>
}

export type PageRefsUpsertWithNestedWhereUniqueInput = {
  Page?: Maybe<PageUpsertWithNestedWhereUniqueInput>
  Post?: Maybe<PostUpsertWithNestedWhereUniqueInput>
  Link?: Maybe<LinkUpsertWithNestedWhereUniqueInput>
}

export type PageRefsWhereInput = {
  Page?: Maybe<PageWhereInput>
  Post?: Maybe<PostWhereInput>
  Link?: Maybe<LinkWhereInput>
}

export type PageRefsWhereUniqueInput = {
  Page?: Maybe<PageWhereUniqueInput>
  Post?: Maybe<PostWhereUniqueInput>
  Link?: Maybe<LinkWhereUniqueInput>
}

export type PageUpdateInput = {
  slug?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  teaser?: Maybe<Scalars['String']>
  refs?: Maybe<PageRefsUpdateManyInlineInput>
  pageRefs?: Maybe<PageUpdateOneInlineInput>
  menu?: Maybe<MenuUpdateOneInlineInput>
  description?: Maybe<Scalars['String']>
}

export type PageUpdateManyInlineInput = {
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>
}

export type PageUpdateManyInput = {
  content?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  teaser?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageWhereInput
  /** Update many input */
  data: PageUpdateManyInput
}

export type PageUpdateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>
}

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput
  /** Document to update */
  data: PageUpdateInput
}

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput
  /** Update document if it exists */
  update: PageUpdateInput
}

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput
  /** Upsert data */
  data: PageUpsertInput
}

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  teaser?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  teaser_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  teaser_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  teaser_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  teaser_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  teaser_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  teaser_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  teaser_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  teaser_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  teaser_not_ends_with?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageWhereInput>
  menu?: Maybe<MenuWhereInput>
  description?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>
}

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type Post = Node & {
  __typename?: 'Post'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Post>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  pageRefs?: Maybe<Page>
  slug?: Maybe<Scalars['String']>
  tags: Array<Tag>
  /** List of Post versions */
  history: Array<Version>
}

export type PostDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type PostPageRefsArgs = {
  locales?: Maybe<Array<Locale>>
}

export type PostTagsArgs = {
  where?: Maybe<TagWhereInput>
  orderBy?: Maybe<TagOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<Locale>>
}

export type PostHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type PostConnectInput = {
  /** Document to connect */
  where: PostWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<PostEdge>
  aggregate: Aggregate
}

export type PostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageCreateOneInlineInput>
  slug?: Maybe<Scalars['String']>
  tags?: Maybe<TagCreateManyInlineInput>
}

export type PostCreateManyInlineInput = {
  /** Create and connect multiple existing Post documents */
  create?: Maybe<Array<PostCreateInput>>
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostWhereUniqueInput>>
}

export type PostCreateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>
  /** Connect one existing Post document */
  connect?: Maybe<PostWhereUniqueInput>
}

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge'
  /** The item at the end of the edge. */
  node: Post
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type PostManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageWhereInput>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  tags_every?: Maybe<TagWhereInput>
  tags_some?: Maybe<TagWhereInput>
  tags_none?: Maybe<TagWhereInput>
}

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageUpdateOneInlineInput>
  slug?: Maybe<Scalars['String']>
  tags?: Maybe<TagUpdateManyInlineInput>
}

export type PostUpdateManyInlineInput = {
  /** Create and connect multiple Post documents */
  create?: Maybe<Array<PostCreateInput>>
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostConnectInput>>
  /** Override currently-connected documents with multiple existing Post documents */
  set?: Maybe<Array<PostWhereUniqueInput>>
  /** Update multiple Post documents */
  update?: Maybe<Array<PostUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Post documents */
  upsert?: Maybe<Array<PostUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Post documents */
  disconnect?: Maybe<Array<PostWhereUniqueInput>>
  /** Delete multiple Post documents */
  delete?: Maybe<Array<PostWhereUniqueInput>>
}

export type PostUpdateManyInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
}

export type PostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PostWhereInput
  /** Update many input */
  data: PostUpdateManyInput
}

export type PostUpdateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>
  /** Update single Post document */
  update?: Maybe<PostUpdateWithNestedWhereUniqueInput>
  /** Upsert single Post document */
  upsert?: Maybe<PostUpsertWithNestedWhereUniqueInput>
  /** Connect existing Post document */
  connect?: Maybe<PostWhereUniqueInput>
  /** Disconnect currently connected Post document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Post document */
  delete?: Maybe<Scalars['Boolean']>
}

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput
  /** Document to update */
  data: PostUpdateInput
}

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput
  /** Update document if it exists */
  update: PostUpdateInput
}

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput
  /** Upsert data */
  data: PostUpsertInput
}

/** Identifies documents */
export type PostWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>
  pageRefs?: Maybe<PageWhereInput>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  tags_every?: Maybe<TagWhereInput>
  tags_some?: Maybe<TagWhereInput>
  tags_none?: Maybe<TagWhereInput>
}

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple links */
  links: Array<Link>
  /** Retrieve a single link */
  link?: Maybe<Link>
  /** Retrieve multiple links using the Relay connection interface */
  linksConnection: LinkConnection
  /** Retrieve document version */
  linkVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple menus */
  menus: Array<Menu>
  /** Retrieve a single menu */
  menu?: Maybe<Menu>
  /** Retrieve multiple menus using the Relay connection interface */
  menusConnection: MenuConnection
  /** Retrieve document version */
  menuVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple pages */
  pages: Array<Page>
  /** Retrieve a single page */
  page?: Maybe<Page>
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple posts */
  posts: Array<Post>
  /** Retrieve a single post */
  post?: Maybe<Post>
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple tags */
  tags: Array<Tag>
  /** Retrieve a single tag */
  tag?: Maybe<Tag>
  /** Retrieve multiple tags using the Relay connection interface */
  tagsConnection: TagConnection
  /** Retrieve document version */
  tagVersion?: Maybe<DocumentVersion>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>
  orderBy?: Maybe<AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>
  orderBy?: Maybe<AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryLinksArgs = {
  where?: Maybe<LinkWhereInput>
  orderBy?: Maybe<LinkOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryLinkArgs = {
  where: LinkWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryLinksConnectionArgs = {
  where?: Maybe<LinkWhereInput>
  orderBy?: Maybe<LinkOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryLinkVersionArgs = {
  where: VersionWhereInput
}

export type QueryMenusArgs = {
  where?: Maybe<MenuWhereInput>
  orderBy?: Maybe<MenuOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryMenuArgs = {
  where: MenuWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryMenusConnectionArgs = {
  where?: Maybe<MenuWhereInput>
  orderBy?: Maybe<MenuOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryMenuVersionArgs = {
  where: VersionWhereInput
}

export type QueryPagesArgs = {
  where?: Maybe<PageWhereInput>
  orderBy?: Maybe<PageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPageArgs = {
  where: PageWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPagesConnectionArgs = {
  where?: Maybe<PageWhereInput>
  orderBy?: Maybe<PageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPageVersionArgs = {
  where: VersionWhereInput
}

export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>
  orderBy?: Maybe<PostOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPostArgs = {
  where: PostWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>
  orderBy?: Maybe<PostOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPostVersionArgs = {
  where: VersionWhereInput
}

export type QueryTagsArgs = {
  where?: Maybe<TagWhereInput>
  orderBy?: Maybe<TagOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryTagArgs = {
  where: TagWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryTagsConnectionArgs = {
  where?: Maybe<TagWhereInput>
  orderBy?: Maybe<TagOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryTagVersionArgs = {
  where: VersionWhereInput
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  r: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  b: Scalars['RGBAHue']
  a: Scalars['RGBATransparency']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  b: Scalars['RGBAHue']
  a: Scalars['RGBATransparency']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type Tag = Node & {
  __typename?: 'Tag'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Tag>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  postTags?: Maybe<Post>
  /** List of Tag versions */
  history: Array<Version>
}

export type TagDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type TagPostTagsArgs = {
  locales?: Maybe<Array<Locale>>
}

export type TagHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type TagConnectInput = {
  /** Document to connect */
  where: TagWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type TagConnection = {
  __typename?: 'TagConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<TagEdge>
  aggregate: Aggregate
}

export type TagCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  postTags?: Maybe<PostCreateOneInlineInput>
}

export type TagCreateManyInlineInput = {
  /** Create and connect multiple existing Tag documents */
  create?: Maybe<Array<TagCreateInput>>
  /** Connect multiple existing Tag documents */
  connect?: Maybe<Array<TagWhereUniqueInput>>
}

export type TagCreateOneInlineInput = {
  /** Create and connect one Tag document */
  create?: Maybe<TagCreateInput>
  /** Connect one existing Tag document */
  connect?: Maybe<TagWhereUniqueInput>
}

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge'
  /** The item at the end of the edge. */
  node: Tag
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type TagManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TagWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TagWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TagWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  postTags?: Maybe<PostWhereInput>
}

export enum TagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type TagUpdateInput = {
  slug?: Maybe<Scalars['String']>
  postTags?: Maybe<PostUpdateOneInlineInput>
}

export type TagUpdateManyInlineInput = {
  /** Create and connect multiple Tag documents */
  create?: Maybe<Array<TagCreateInput>>
  /** Connect multiple existing Tag documents */
  connect?: Maybe<Array<TagConnectInput>>
  /** Override currently-connected documents with multiple existing Tag documents */
  set?: Maybe<Array<TagWhereUniqueInput>>
  /** Update multiple Tag documents */
  update?: Maybe<Array<TagUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Tag documents */
  upsert?: Maybe<Array<TagUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Tag documents */
  disconnect?: Maybe<Array<TagWhereUniqueInput>>
  /** Delete multiple Tag documents */
  delete?: Maybe<Array<TagWhereUniqueInput>>
}

export type TagUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>
}

export type TagUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TagWhereInput
  /** Update many input */
  data: TagUpdateManyInput
}

export type TagUpdateOneInlineInput = {
  /** Create and connect one Tag document */
  create?: Maybe<TagCreateInput>
  /** Update single Tag document */
  update?: Maybe<TagUpdateWithNestedWhereUniqueInput>
  /** Upsert single Tag document */
  upsert?: Maybe<TagUpsertWithNestedWhereUniqueInput>
  /** Connect existing Tag document */
  connect?: Maybe<TagWhereUniqueInput>
  /** Disconnect currently connected Tag document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Tag document */
  delete?: Maybe<Scalars['Boolean']>
}

export type TagUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TagWhereUniqueInput
  /** Document to update */
  data: TagUpdateInput
}

export type TagUpsertInput = {
  /** Create document if it didn't exist */
  create: TagCreateInput
  /** Update document if it exists */
  update: TagUpdateInput
}

export type TagUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TagWhereUniqueInput
  /** Upsert data */
  data: TagUpsertInput
}

/** Identifies documents */
export type TagWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TagWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TagWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TagWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  postTags?: Maybe<PostWhereInput>
}

/** References Tag record uniquely */
export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export type Version = {
  __typename?: 'Version'
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
  createdAt: Scalars['DateTime']
}

export type VersionWhereInput = {
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
}

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type ListPagesQueryVariables = Exact<{ [key: string]: never }>

export type ListPagesQuery = { __typename?: 'Query' } & {
  pages: Array<{ __typename?: 'Page' } & Pick<Page, 'slug'>>
}

export type ListPostsQueryVariables = Exact<{ [key: string]: never }>

export type ListPostsQuery = { __typename?: 'Query' } & {
  posts: Array<{ __typename?: 'Post' } & Pick<Post, 'slug'>>
}

export type PageQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>
}>

export type PageQuery = { __typename?: 'Query' } & {
  page?: Maybe<
    { __typename?: 'Page' } & Pick<
      Page,
      'id' | 'title' | 'slug' | 'content' | 'teaser' | 'description'
    > & {
        refs: Array<
          | ({ __typename: 'Link' } & Pick<Link, 'href' | 'alt'> & {
                linkTitle: Link['title']
              })
          | ({ __typename: 'Page' } & Pick<
              Page,
              'createdAt' | 'publishedAt' | 'teaser'
            > & { pageSlug: Page['slug'] })
          | ({ __typename: 'Post' } & Pick<
              Post,
              'title' | 'excerpt' | 'createdAt' | 'publishedAt' | 'slug'
            >)
        >
        pageMenu?: Maybe<
          { __typename?: 'Menu' } & {
            menu: Array<{ __typename?: 'Link' } & Pick<Link, 'title' | 'href'>>
          }
        >
      }
  >
  menu?: Maybe<
    { __typename?: 'Menu' } & {
      menu: Array<{ __typename?: 'Link' } & Pick<Link, 'title' | 'href'>>
    }
  >
}

export type PostQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>
}>

export type PostQuery = { __typename?: 'Query' } & {
  post?: Maybe<
    { __typename?: 'Post' } & Pick<
      Post,
      'id' | 'title' | 'slug' | 'content' | 'createdAt' | 'updatedAt'
    > & { tags: Array<{ __typename?: 'Tag' } & Pick<Tag, 'slug'>> }
  >
  menu?: Maybe<
    { __typename?: 'Menu' } & {
      menu: Array<{ __typename?: 'Link' } & Pick<Link, 'title' | 'href'>>
    }
  >
}

export const ListPagesDocument = gql`
  query ListPages {
    pages {
      slug
    }
  }
`
export type ListPagesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ListPagesQuery,
    ListPagesQueryVariables
  >,
  'query'
>

export const ListPagesComponent = (props: ListPagesComponentProps) => (
  <ApolloReactComponents.Query<ListPagesQuery, ListPagesQueryVariables>
    query={ListPagesDocument}
    {...props}
  />
)

/**
 * __useListPagesQuery__
 *
 * To run a query within a React component, call `useListPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPagesQuery(
  baseOptions?: Apollo.QueryHookOptions<ListPagesQuery, ListPagesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListPagesQuery, ListPagesQueryVariables>(
    ListPagesDocument,
    options
  )
}
export function useListPagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListPagesQuery,
    ListPagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListPagesQuery, ListPagesQueryVariables>(
    ListPagesDocument,
    options
  )
}
export type ListPagesQueryHookResult = ReturnType<typeof useListPagesQuery>
export type ListPagesLazyQueryHookResult = ReturnType<
  typeof useListPagesLazyQuery
>
export type ListPagesQueryResult = Apollo.QueryResult<
  ListPagesQuery,
  ListPagesQueryVariables
>
export const ListPostsDocument = gql`
  query ListPosts {
    posts {
      slug
    }
  }
`
export type ListPostsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ListPostsQuery,
    ListPostsQueryVariables
  >,
  'query'
>

export const ListPostsComponent = (props: ListPostsComponentProps) => (
  <ApolloReactComponents.Query<ListPostsQuery, ListPostsQueryVariables>
    query={ListPostsDocument}
    {...props}
  />
)

/**
 * __useListPostsQuery__
 *
 * To run a query within a React component, call `useListPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<ListPostsQuery, ListPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListPostsQuery, ListPostsQueryVariables>(
    ListPostsDocument,
    options
  )
}
export function useListPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListPostsQuery,
    ListPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListPostsQuery, ListPostsQueryVariables>(
    ListPostsDocument,
    options
  )
}
export type ListPostsQueryHookResult = ReturnType<typeof useListPostsQuery>
export type ListPostsLazyQueryHookResult = ReturnType<
  typeof useListPostsLazyQuery
>
export type ListPostsQueryResult = Apollo.QueryResult<
  ListPostsQuery,
  ListPostsQueryVariables
>
export const PageDocument = gql`
  query Page($slug: String = "home") {
    page(where: { slug: $slug }, stage: PUBLISHED) {
      id
      title
      slug
      content
      teaser
      description
      refs {
        __typename
        ... on Page {
          createdAt
          publishedAt
          pageSlug: slug
          teaser
        }
        ... on Post {
          title
          excerpt
          createdAt
          publishedAt
          slug
        }
        ... on Link {
          linkTitle: title
          href
          alt
        }
      }
      pageMenu: menu {
        menu {
          ... on Link {
            title
            href
          }
        }
      }
    }
    menu(where: { title: "contact" }) {
      menu {
        ... on Link {
          title
          href
        }
      }
    }
  }
`
export type PageComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<PageQuery, PageQueryVariables>,
  'query'
>

export const PageComponent = (props: PageComponentProps) => (
  <ApolloReactComponents.Query<PageQuery, PageQueryVariables>
    query={PageDocument}
    {...props}
  />
)

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePageQuery(
  baseOptions?: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options)
}
export function usePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(
    PageDocument,
    options
  )
}
export type PageQueryHookResult = ReturnType<typeof usePageQuery>
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>
export const PostDocument = gql`
  query Post($slug: String) {
    post(where: { slug: $slug }, stage: PUBLISHED) {
      id
      title
      slug
      content
      createdAt
      updatedAt
      tags {
        slug
      }
    }
    menu(where: { title: "contact" }) {
      menu {
        ... on Link {
          title
          href
        }
      }
    }
  }
`
export type PostComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<PostQuery, PostQueryVariables>,
  'query'
>

export const PostComponent = (props: PostComponentProps) => (
  <ApolloReactComponents.Query<PostQuery, PostQueryVariables>
    query={PostDocument}
    {...props}
  />
)

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostQuery(
  baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options)
}
export function usePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(
    PostDocument,
    options
  )
}
export type PostQueryHookResult = ReturnType<typeof usePostQuery>
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>
