import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    inserted(el, node) {    
        console.log('border --')
        console.log(node);
        console.log(el);
        
        var border = node.value || true;

        if(border) {
            el.style.border = 'solid 1px #dbdbdb';
        }



        // if (node.value) {
        //     // var a = false || '기본값';              // 앞에가 false면 뒤에 '기본값'이 들어간다.
        //     // var b = true || '이건 무시되는 값';     // 이런 경우에는 항상 true
        //     // var c = "" || "빈 값을 입력하셨네요";  // 이런식으로 응용도 가능하다.
            
            
        //     var bgColor = node.value.backgroundColor || '#ff0000';
        //     var border = node.value.border || false;

        //     if( typeof border == 'boolean' && border) {   
        //         el.style.border = 'solid 1px black';
        //     }


        //     // el.style.backgroundColor = node.value.backgroundColor;
        //     // el.style.color = node.value.color;
        //     // el.style.border = 'solid 1px black';
        // }
        // switch (this.form.values.primary_phone.length) {
        //   case 3:
        //     return this.form.values.primary_phone = this.form.values.primary_phone.replace(/^([0-9]{3})$/, '($1)');
        //   case 6:
        //     return this.form.values.primary_phone = this.form.values.primary_phone.replace(/^([0-9]{3})([0-9]{3})$/, '($1)-$2');
        //   case 10:
        //     return this.form.values.primary_phone = this.form.values.primary_phone.replace(/^([0-9]{3})([0-9]{3})([0-9]{4})$/, '($1)-$2-$3');
        // }

    },
    update(el, binding, vnode) {
       // console.log("updated");
    }
    
};

export default directive;