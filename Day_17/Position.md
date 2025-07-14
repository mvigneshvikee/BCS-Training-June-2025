## Position CSS

### Five types of position

1. static --> Default value
1. relative
1. absolute
1. fixed
1. sticky

### ralative ==> Good thief

- irukra place la irunthu nagarnthu poo
- it does not lose its own space
- it moves from its own space

### absolute ==> Bad thief

- it lose its own space
- it moves from if its parent is relative
- if you dont give any ralative value. it directly go to default body relative.
- position absolute works in overlap situation.
- ( which one you have to move that element should be given absolute)

### Fixed

- fixed always consider screen value or size.
- use translateX(-50%) and left: 50% this properties are used to screen center the content.
- transform: translate(-50% -50%)

### Sticky

- sticky = static + fixed
- position : sticky ; and top : 0 ;

### min-height: 100vh

-

### what is body height

- content height is body height

### psuedo element ( :: )

- before and after

- **z-index** css propertie

### getcssscan website is using to box-shadow properties

## Background Properties

- object-fit: cover;
- background-size : cover; => contain
- cover = zoom in // contain = zoom out
- background-position: center
- background-blend-mode: luminosiy;
- mix-blend-mode:
- background-repeat:

### picture element in html

### Box-sizing

- box-sizing: content =>content to content. must content space then adding additional padding and border width
- box-sizing: border => border to border width. if you giving padding value content space will be shared.
-

## DOM

- HTML pharse and css pharse
- html pharse converts html code into DOM
- getElementByTagName, ClassName, Id these are all returns HTML collecion
- querySelectorAll -> always return NodeList ==> it is used to select multiple class
- querySelector  --> it is used to select single element for example using id. incase if you giving class it select first class element only.
- 

- backward compatibility
