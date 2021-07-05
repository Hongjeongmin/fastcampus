const source   = `
<div class="entry">
  <h1>{{title}}</h1>
  {{#if hasList}}
  <ul>
    {{#each list}}
      <li>{{title}} - {{director}}</li>
    {{/each}}
  </ul>
  {{else}}
  <div class="jumbotron">
    등록된 영화 목록이 없습니다.
  </div>
  {{/if}}
</div>
`;

let template = Handlebars.compile(source);

let data = { 
  title: '영화', 
  list: [
    { title: '너의 이름은', director: '신카이 마코토', actors: ['카미키 류노스케','카미시라이시 모네','나리타 료','유우키 아오이'] },
    { title: ' 패신저스', director: '모튼 틸덤', actors: ['제니퍼 로렌스', '크리스 프랫', '마이클 쉰', '로렌스 피시번'] },
    { title: '사랑하기 때문에', director: '주지홍', actors: ['차태현', '김유정', '서현진', '박근형'] },
    { title: '내 어깨 위 고양이, 밥', director: '로저 스포티스우드', actors: ['김하늘', '유인영', '이원근'] },
  ]
};

data.hasList = 0;

document.querySelector('#app').innerHTML = template(data);
