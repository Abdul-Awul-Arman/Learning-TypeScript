# Difference Between `private` and `protected` in TypeScript

In **TypeScript**, `private` and `protected` are **access modifiers** used to control the visibility of class members.

---

## 🔒 `private`

- Accessible **only within the class** where it is defined.
- **Not accessible** from outside the class or by subclasses.

```ts
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  private speak() {
    console.log("Animal sound");
  }
}

const a = new Animal("Dog");
// a.name;     ❌ Error: Property 'name' is private
// a.speak();  ❌ Error: Method 'speak' is private
