# DOCTYPE

```html
<!DOCTYPE html>
```

- DOCTYPE 선언은 html 문서에서 `<html>` 태그를 정의하기 전에 가장 먼저 선언되어야 한다.
- `<!DOCTYPE >` 선언은 html태그는 아니지만 몇 버전의 html파일인지 브라우저에게 알려주는 역할을 한다. (대소구분x)

```html
<!-- html 4.01버전에서 DOCTYPE 선언하는 3가지 방법-->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

- 참조: [tcpschool](http://www.tcpschool.com/html-tags/doctype)

# meta

- `<meta>` 요소는 html문서의 메타데이터를 정의할 때 사용한다.
  - 메타데이터: 데이터를 위한 데이터. html에서는 html문서에 대한 정보.
- `<meta>` 요소는 항상 `<head>`요소 내부에 존재해야한다.
- 만약 `name`, `http-equiv` 속성이 명시되었다면 반드시 `content` 속성도 함께 명시되어야 하며, 반대로 두 속성이 명시되지 않았다면 content 속성 또한 명시될 수 없다.
- HTML5에서는 `<meta>` 요소를 통해 웹 페이지에서 사용자가 볼 수 있는 영역인 뷰포트(viewport)를 제어할 수 있도록 `name` 속성에 `viewport` 값을 제공하고 있다.
- HTML파일에서는 `<meta>` 요소를 닫지 않아도됨. XHTML 문서에서는 반드시 닫아야함 `<meta />`

```html
<!-- 
검색엔진을 위한 키워드(검색어)를 정의
많은 검색 엔진들은 이러한 키워드를 고려하지 않는데, 이는 이 기능이 역사적으로 사용자에게 도움이 되지 않는 방식으로 스팸 검색 엔진 결과를 얻는 방법으로 신뢰성이 떨어지고 심지어 오해의 소지가 있게 사용되었기 때문이다.
출처: https://html.spec.whatwg.org/multipage/semantics.html#meta-keywords
-->
<meta name="keyword" content="HTML, meta, tag, element, reference" />

<!-- 웹 페이지에 대한 설명,  Firefox, Opera 등 여러 브라우저는 즐겨찾기 페이지의 기본 설명 값으로 description 메타데이터를 사용함 -->
<meta name="description" content="구글엔진이 의외로 참고를 별로 안한다고 함" />

<!-- 문서의 저자 -->
<meta name="author" content="TCPSchool" />

<!-- 3초뒤 다른페이지로 디리렉션 -->
<meta http-equiv="refresh" content="3;url=http://www.tcpschool.com" />

<!-- 모든 디바이스에서 문서가 잘보이도록 뷰포트를 설정 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- 
브라우저가 이 값을 사용해 애플리케이션을 식별할 수 있습니다.
<title> 요소 역시 보통 애플리케이션 이름을 포함하지만, application-name과는 달리 문서 이름이나 상태 등 다른 정보도 존재할 수 있다는 점에서 차이가 있습니다.
단순한 웹 페이지에서는 application-name을 지정하지 말아야 합니다.
출처: https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name
 -->
<meta name="application-name" content="재하 서비스" />

<!-- 웹사이트를 제작할 때 어떤 프로그램을 사용했는지 표시해줌-->
<meta name="generator" content="페이지를 생성한 소프트웨어의 식별자" />

<!-- 문서에서 시작하는 요청의 HTTP Referer 헤더를 아래 표와 같이 통제한다. 출처: https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name#html_%EB%AA%85%EC%84%B8%EA%B0%80_%EC%A0%95%EC%9D%98%ED%95%98%EB%8A%94_%ED%91%9C%EC%A4%80_%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%9D%B4%EB%A6%84 -->
<!-- HTTP Referer 헤더를 전송하지 않습니다. -->
<meta name="referrer" content="no-referrer" />
<!-- 문서의 출처를 전송합니다. -->
<meta name="referrer" content="origin" />
<!-- 목적지가 현재 문서와 동일하거나 더 높은(HTTP(S)→HTTPS) 보안 수준을 가진 경우 전체 URL을 전송하고, 더 취약(HTTPS→HTTP)한 경우 전송하지 않습니다. 기본 동작 방식입니다. -->
<meta name="referrer" content="no-referrer-when-downgrade" />
<!-- 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 교차 출처 요청에는 출처만 전송합니다. -->
<meta name="referrer" content="origin-when-cross-origin" />
<!-- 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 교차 출처 요청에는 아무 레퍼러 정보도 보내지 않습니다. -->
<meta name="referrer" content="same-origin" />
<!-- 목적지가 현재 문서와 동일하거나 더 높은(HTTP(S)→HTTPS) 보안 수준을 가진 경우 출처를 전송하고, 더 취약(HTTPS→HTTP)한 경우 전송하지 않습니다. -->
<meta name="referrer" content="strict-origin" />
<!-- 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 목적지가 현재 문서와 동일하거나 더 높은 보안 수준(HTTP(S)→HTTPS)을 가진 경우 자신의 출처를 전송합니다. 그 외의 경우 아무 레퍼러 정보도 보내지 않습니다. -->
<meta name="referrer" content="strict-origin-when-cross-origin" />
<!-- 동일 출처와 교차 출처 요청 모두에 대해서 전체 URL을 전송합니다. -->
<meta name="referrer" content="unsafe-URL	" />
```

- 참조: [html standard](https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names)
