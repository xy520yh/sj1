
//点击menu弹出菜单栏
$('body').on("click", ".part1_menu,.list_menu", function () {
  $('.nav_box').toggleClass('active');
});
$('body').on("click", '.nav_box .closed', function () {
		$('.nav_box').removeClass('active');
});
//点击立即预约弹窗
$('.part2_register_btn').click(function(){
  $('.masked').css('display','block');
  $('.tc_register').css('display','block');
})
$('.closed').click(function(){
  $(this).parents('.tc_register').css('display','none');
  $('.masked').css('display','none');
})
$('.masked').click(function(){
  $('.tc_register').css('display','none');
  $('.masked').css('display','none');
})



// 注册框里面切换
$('.register ul li').mouseover(function(){
  $(this).addClass('active').siblings().removeClass('active');
  $(".conText").eq($(this).index()).show().siblings(".conText").hide();
})
// 注册框里面获取焦点
 $(".text_content1").focus(function(){
  if($(this).val()=='Enter email address'){
    $(this).val("")
    }
  });
  $(".text_content1").blur(function(){
  if($(this).val()==''){
    $(this).val("Enter email address")
  }
  })
  $(".text_content3").focus(function(){
  if($(this).val()=='Verification Codes'){
    $(this).val("")
    }
  });
  $(".text_content3").blur(function(){
  if($(this).val()==''){
    $(this).val("Verification Codes")
  }
  })












// //点击注册按钮 弹出注册
// $('.sure_btn').click(function(){
//   $('.masked').css('display','block');
//   $('.tc_register').css('display','block');
// })




// //点击注册框里的确认 弹出成功
// $('.btn1,.register_closed').click(function(){
//   $('.masked').css('display','block');
//   $('.tc_register').css('display','none');
//   $('.tc_success_compeleted').css('display','block');
// })

// $('.ok,.success_closed').click(function(){
//   $('.masked').css('display','none');
//   $('.tc_success_compeleted').css('display','none');
// })

// // 注册框里面切换
// $('.register ul li').mouseover(function(){
//   $(this).addClass('active').siblings().removeClass('active');
//   $(".conText").eq($(this).index()).show().siblings(".conText").hide();
//   })
  
//   // 注册框里面获取焦点
//   $(".text_content1").focus(function(){
//     if($(this).val()=='Enter email address'){
//     $(this).val("")
//   }
//   });
//   $(".text_content1").blur(function(){
//     if($(this).val()==''){
//     $(this).val("Enter email address")
//   }
//   })	
  

// $('.register_closed').click(function(){
//   // $(this).parents('.tc_register').css('display','none');
//   // $('.masked').css('display','none');

//   $('.masked').css('display','block');
//   $('.tc_register').css('display','none');
//   $('.tc_success_compeleted').css('display','block');
// })
// $('.masked').click(function(){
//   $('.tc_register').css('display','none');
//   $('.masked').css('display','none');
// })

//   $('.tc_title .closed').click(function(){
//       $(this).parents('.tc_success_compeleted').css('display','none');
//       $('.masked').css('display','none');
//  })
    





