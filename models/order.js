const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    firstName: String,
    lastName: String,
    selectedTemplateOne: String,
    selectedBGColor: String,
    selectedFont: String,
    branding: Boolean,
    selectedBGColorTwo: String,
    personalInfo: Object,
    otherInfo: String,
    onlineCompCard: Boolean,
    roundCorner: Boolean,
    envelope: Boolean,
    individual: Boolean,
    emailAddress: String,
    firstAddress: Object,
    differentShipping: Boolean,
    secondAddress: Object,
    totalAmount: Number
});
mongoose.model('order', orderSchema);