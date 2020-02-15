import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('Keyword', () => {
  it('should pass getBiddableKeyword response', () => {
    const res = t.Keyword.decode({
      keywordId: 16577721726418,
      adGroupId: 149522344269714,
      campaignId: 164069484151709,
      keywordText: 'Apple',
      matchType: 'broad',
      state: 'paused',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('UpdateSBNegativeKeywordParams', () => {
  it('should pass update sb negative keyword params', () => {
    const res = t.UpdateSBNegativeKeywordParams.decode({
      keywordId: 0,
      adGroupId: 0,
      campaignId: 0,
      state: 'enabled',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('CreateSBNegativeKeywordParams', () => {
  it('should pass create sb negative keyword params', () => {
    const res = t.CreateSBNegativeKeywordParams.decode({
      adGroupId: 0,
      campaignId: 0,
      keywordText: 'string',
      matchType: 'negativeExact',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBKeywordResponse', () => {
  it('should pass create, update, archive sb negative keyword response', () => {
    const res = t.SBKeywordResponse.decode({
      keywordId: 0,
      code: 'string',
      details: 'string',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('SBNegativeKeyword', () => {
  it('should pass get sb negative keyword response', () => {
    const res = t.SBNegativeKeyword.decode({
      keywordId: 0,
      adGroupId: 0,
      campaignId: 0,
      keywordText: 'string',
      matchType: 'negativeExact',
      state: 'enabled',
    })

    expect(isRight(res)).toBeTruthy()
  })
})
