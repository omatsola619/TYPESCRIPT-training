class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(a: string, b: string, c: number) {
    this.client = a;
    this.details = b;
    this.amount = c;
  }

  format() {
    return `${this.client} owes $${this.amount} to ${this.details}`;
  }
}

const firstInvoice = new Invoice("omatsola", "bank", 10);
const secondInvoice = new Invoice("fred", "co-operation", 300);

const invoices: Invoice[] = [];
invoices.push(firstInvoice);
invoices.push(secondInvoice);

invoices.forEach((i) => {
  console.log(i.client, i.details, i.amount, i.format());
});


// const form = document.querySelector(".new-item-form") as HTMLFormElement;
// // console.log(form.children)

// const type = document.querySelector("#type") as HTMLSelectElement;
// const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;

// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();
//   const expense = {
//     type: type.value,
//     toFrom: toFrom.value,
//     details: details.value,
//     amount: amount.valueAsNumber,
//   };
//   console.log(expense);
// });
