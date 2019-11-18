export const GetMessages = (elem) => {
    const messages = [];
    if (elem.validity.valueMissing) {
        messages.push("Giá trị không được để trống");
    }
    if (elem.validity.typeMismatch) {
        messages.push(`Giá trị không đúng kiểu ${elem.type}`);                        
    }    
    return messages;
}