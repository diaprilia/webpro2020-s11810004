let account = {
    name: "Diaprilia",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary(){
      let sum = 0;
      this.expenses.forEach((item)=>{
        sum+=item.amount;
      })
      return `${sum}`;
    }
};
account.addExpenses('Harga Pizza', 100000);
account.addExpenses('Ongkir GrabFood', 14000);
console.log(`Total beli Pizza ditambah ongkos kirim GrabFood pesanan ${account.name} adalah Rp. ${account.getAccountSummary()}`);