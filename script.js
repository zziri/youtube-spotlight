function handleSubmit(event) {
  event.preventDefault(); // 기본 폼 제출 방지
  let query = document.querySelector('.search-input').value.trim();

  // TODO: query 에 저장된 문자열 내 ' ' 공백 문자를 '+'로 변경
  query = query.replace(/ /g, '+');

  // TODO: query 가 비어있다면 false 리턴
  if (!query) {
      alert("검색어를 입력하세요!");
      return false;
  }

  // TODO: query 를 기반으로 http://naver.com/search={query} 주소로 이동
  window.location.href = `https://www.youtube.com/results?search_query=${query}`;

  return false; // 폼이 실제로 제출되지 않도록 방지
}
