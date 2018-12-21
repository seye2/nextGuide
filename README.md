
## Table of Contents

- [Setup Basic](#setup-basic)
- [Available Script](#available-script)
- [Folder Structure](#folder-structure)
- [Global CSS](#global-css)
- [Set Router](#set-router)
- [Set Config](#set-config)
- [Component](#component)

## Setup Basic
<details>
<summary>List</summary>

https://nodejs.org/ko/

(version >= 10.0.0)

https://yarnpkg.com/lang/en/

https://reactjs.org/

https://www.typescriptlang.org/

https://webpack.js.org/

https://github.com/zeit/next.js/

https://nextjs.org/docs

https://github.com/zeit/next.js/tree/canary/examples/with-styled-components

https://github.com/mobxjs/mobx

https://mobx.js.org

https://storybook.js.org/

https://github.com/strothj/react-docgen-typescript-loader

***추후 testing

https://jestjs.io/en/
</details>

## Available Script
- git clone을 하여 레파지토리 복사

```
    $ yarn install //폴더에 node_module설치
    $ yarn dev //next dev 실행
    $ yarn build //next build (.next/bundles, .next/server, .next/static)
    $ yarn storybook //storybook실행
    $ yarn build //webpack build
```

## Folder Structure
<details>
    <summary>structure</summary>
    
    nextguide
        ├── .next                       # build folder, release server
            ├── bundles                     # build client
                ├── pages                       # client pages
            ├── server                      # build server
                ├── bundles                     # server bundles
                    ├── pages                       # server pages
            ├── static                      # static folder
                ├── commons                     
                    ├── main.js                     # node_modules
                    
        ├── .storybook                  # set storybook folder (include webpack)
        ├── components                  # components folder
            ├── button                  
                ├── Button.tsx              # core button
                ├── ButtonA.tsx             # button A type
            ├── input                  
                ├── Input.tsx               # core Input
                ├── InputA.tsx              # input A type
            ├── layout                  
                ├── ContainerA.tsx          # container component
                ├── FooterA.tsx             # footer component
                ├── GnbA.tsx                # gnb component
                ├── HeaderA.tsx             # header component
                ├── LayoutA.tsx             # layout component
                ├── ContentsA.tsx           # contents component
                ├── index.ts                # export components
            ├── index.ts                # export all component modules
        ├── lib                         # library
            ├── util.ts                 # queryString, api class 
        ├── pages                       # html and global props
            ├── _app.tsx                    # HOC(High order component), page title and global properties(css)
            ├── _document.tsx               # set basic html(css, script, head, body)
            ├── _error.tsx                  # error pages
            └── index.tsx                   # /
        ├── styles                      # style(css) folder
            ├── common.ts                   # global csss 
        ├── config.ts                   # set assetPrefix (image)
        ├── store                       # mobx store
        ├── stories                     # storybook module (pages)
        ├── next.config.ts              # set typescript, css, webpack, router on nextjs
        ├── package.json                # set package list, npm script 
        ├── README.md                   # project document 
        ├── typing.d.ts                 # can set goabal variable in typescript
        ├── tsconfig.json               # set typescript envrionment
        └── tsconfig.story.json         # set storybook config(webpack)
</details>

## Global CSS
global로 설정할 css는 아래 폴더의 'common.ts'파일에서 설장할 수 있다.
```
    ├── styles                      # style(css) folder
        ├── common.ts                   # global csss 
```

## Set Router
현재 라우터 설정은 'next.config.ts'에 아래와 같이 정의 되어 있다.

'/pages'폴더 내에 만들어진 tsx파일을 타겟으로 잡고 있다.

다만 '_'로 시작되는('_app.tsx'. '_document.tsx', '_error.tsx')는 'next.js'에서 기본적으로 제공하는 page관련 설정 파일이다.  
```

    ├── next.config.ts              # set typescript, css, webpack, router on nextjs
    
    exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages'))
```
        
        
## Set Config
development mode에 따른 환경설정(api, cdn url...) 등은 'config.ts'에서 설정하여 전역 변수처럼 사용하면 된다.
```
        ├── config.ts                   # set assetPrefix (image)
```

## Component
컴포넌트의 구성은 기본적인 형태를 가진 컴포넌트와 그것을 상속받아 디자인/기능에 따른 확장 형태의 컴포넌트를 가진다.
구성은 아래와 같이 한다.
prefix는 A, B, C, D...와 같이 구성하였다.  
```
    ├── Button.tsx              # core button
    ├── ButtonA.tsx             # button A type
```

### Guide
<details>
    <summary>examples</summary>
    
#### Component List
- Bad
```
render() {
    const {todos, user} = this.props;
    return (<div>
        // 렌더를 하면서 user.name을 다시 갱신할 필요가 없기 때문에 이 방법으로 코딩하는 것은 비추천
        {user.name}
        <ul>
            {todos.map(todo => <TodoView todo={todo} key={todo.id} />)}
        </ul>
    </div>)
}
```

- Good
```
render() {
    const {todos, user} = this.props;
    return (<div>
        // 리스트로 뿌려질 내용은 하나의 컴포넌트로 구성하여 그 부분만 갱신하도록 구현한다.
        {user.name}
        <TodosView todos={todos} />
    </div>)
}
```

#### Dereference values late
아래 예제는 소유하고 있는 컴포넌트를 리렌더링 하기 때문에 속도가 느리다.
- Slower
```
<DisplayName name={person.name} />.
```

아래 예제는 DisplayName만 리렌더링 하기 때문에 속도가 훨씬 빠르다.
- Fast
```
<DisplayName person={person} />
```

- as is
아래와 같이 프로퍼티를 정해하였을때 다양한 형태의 많은 데이터를 다루기가 까다로워진다.
```
const PersonNameDisplayer = observer((props) => <DisplayName name={props.person.name} />)
const CarNameDisplayer = observer((props) => <DisplayName name={props.car.model} />)
const ManufacturerNameDisplayer = observer((props) => <DisplayName name={props.car.manufacturer.name} />)
```

- as is
아래와 같이 프로퍼티를 설정하는 부분을 함수로 만듬으로써 데이터 및 함수내에서 여러 기능을 구현 할 수 있게 할 수 있다.
```
render() {
  const { person, car } = this.props;
  return (
    <>
      <GenericNameDisplayer getNameTracked={() => person.name} />
      <GenericNameDisplayer getNameTracked={car.getModelTracked} />
      <GenericNameDisplayer getNameTracked={this.getManufacturerNameTracked} />
    </>
  );
}

getManufacturerNameTracked = () => this.props.car.manufacturer.name;

...
class Car {
  @observable model
  getModelTracked = () => this.model
}
```

#### Bind functions
아래와 같이 이벤트 함수에 inline형태의 함수, 기능을 구현할 시 새롭게 생성되는 클로저 문제를 해결할 수 없다. 
- Bad
```
render() {
    return <MyWidget onClick={() => { alert('hi') }} />
}
```

- Good
```
constructor() {
    // this를 아래와 같이 constructor에서 bind를 하면 중복해서 여러 곳에서 this를 바인드 해야하는 복잡성을 없앨 수 있다.   
    this.handleClick=this.handleClick.bind(this);
}
render() {
    // 아래와 같이 이벤트에 정의한 함수를 연결해 주면 새로운 클로저가 생성되는 문제를 해결 할 수 있다. 
    return <MyWidget onClick={this.handleClick} />
}

private handleClick = (e) => {
    alert('hi');
}
```
</details>
* 참고 : https://mobx.js.org/best/react-performance.html


https://hyunseob.github.io/2017/10/18/mobx-with-react/
https://mobx.js.org/intro/overview.html

