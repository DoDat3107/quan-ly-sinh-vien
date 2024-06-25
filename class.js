class SinhVien{
    name;
    listProduct;
    constructor(nameInput){
        this.name = nameInput
        this.listProduct=[]
        this.maxAverageStudent = null;
    }
    addProduct(newProduct){
        this.listProduct.push(newProduct)
        this.updateMaxAverageStudent();
    }
    removeProduct(index){
        this.listProduct.splice(index,1);
        this.updateMaxAverageStudent();
        localStorage.setItem("listProduct", JSON.stringify(this.listProduct));
    }
    getOneProduct(index){
        let product = this.listProduct[index];
        return product;
    }

    update(index,newProduct){
        this.listProduct[index]=newProduct;
        this.updateMaxAverageStudent(); 
        localStorage.setItem("listProduct", JSON.stringify(this.listProduct));
    }
    calculateAverage(student) {
        let sum = student.toan + student.van + student.anh + student.ly + student.hoa + student.sinh;
        return sum / 6;
    }


    updateMaxAverageStudent() {
        if (this.listProduct.length === 0) {
            this.maxAverageStudent = null;
            return;
        }

        let maxAverage = -1;
        let maxIndex = -1;

        for (let i = 0; i < this.listProduct.length; i++) {
            let student = this.listProduct[i];
            let average = this.calculateAverage(student);
            if (average > maxAverage) {
                maxAverage = average;
                maxIndex = i;
            }
        }

        if (maxIndex !== -1) {
            this.maxAverageStudent = this.listProduct[maxIndex];
        } else {
            this.maxAverageStudent = null;
        }
    }


    getMaxAverageStudent() {
        return this.maxAverageStudent;
    }
}
