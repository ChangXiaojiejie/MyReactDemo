// ES6中class的类

// 定义一个动物类

class Animal {
  constructor(food, hobby) {
    this.food = food
    this.hobby = hobby
  }
  call(name, sound) {
    console.log(name + '的叫声是：' + sound)
  }
}

// 定义一个狗类
class Dog extends Animal {
  constructor(food, hobby, color) {
    super(food, hobby)
    this.color = color
  }
}
let wc = new Dog('骨头', '摇尾巴', '黑色')

console.log(wc)
wc.call('旺财', '汪汪汪')
