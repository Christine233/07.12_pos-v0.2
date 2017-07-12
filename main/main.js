'use strict';

function printReceipt(inputs) {
//#1. 将传入的barcode 和原清单联系起来 , 得到用户用户购买物品的详细清单，并计算商品数量
// （调用loadAllItems()方法得到商店商品清单 inputsArr : [Object];）
    var inputArr = loadAllItems();
    var commArr = [];
    var countNum = 0;
    for (let i = 0; i < inputs.length; i++){
        for(let j = 0 ; j < inputArr.length; j++) {
            if(inputs[i] == inputArr[j].barcode) {
                countNum ++;
                commArr.push(inputArr[i]);
            }
        }
        //inputArr[i].count = countNum;
    }
    console.log(commArr);
}