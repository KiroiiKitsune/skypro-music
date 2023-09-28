import styled,{ css } from 'styled-components'

export const CenterBlockFilters = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: relative;
`

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #181818;
  color: #ffffff;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const BtnTextActive = styled(FilterButton)`
  border-color: #ad61ff;
  color: #ad61ff;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
`

export const FilterBox = styled.div``

export const FilterCounter = styled.div``

export const FilterContentMixin = css`
  position: absolute;
  top: 50px;
  overflow: hidden;
  transition: 1s ease max-height;
  z-index: 4;
  background: #313131;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  padding: 0;
`

export const FilterContent = styled.div`
  width: 248px;
  max-height: ${({ $isAuthorOpen }) => ($isAuthorOpen ? '305px' : '0')};
  ${FilterContentMixin};
`

export const FilterContentYear = styled.div`
  width: 144px;
  max-height: ${({ $isYearOpen }) => ($isYearOpen ? '305px' : '0')};
  ${FilterContentMixin};
`

export const FilterContentGenre = styled.div`
  max-height: ${({ $isGenreOpen }) => ($isGenreOpen ? '305px' : '0')};
  width: 248px;
  ${FilterContentMixin};
`

export const FilterBlock = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`

export const FilterListMixin = css`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  overflow-x: hidden;
  scrollbar-color: #fff #4b4949;
  a {
    color: #fff;
    transition: color 0.3s ease;
  }
  a:active,
  a:hover {
    color: #b672ff;
    text-decoration: underline;
    transition: color 0.3s ease;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 2px;
    border: 2px solid #fff;
  }
`

 export const FilterListMenu = styled.ul`
  ${FilterListMixin};
  width: 180px;
  height: 237px;
`;

 export const FilterListItem = styled.li``

 export const FilterListLink = styled.a``

 export const FilterListYear = styled.ul`
  ${FilterListMixin};
  width: 116px;
  height: 237px;
  align-items: center;
`;