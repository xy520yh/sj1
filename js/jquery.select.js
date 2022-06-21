(function($){

	var selects=$('select');//鑾峰彇select

	for(var i=0;i<selects.length;i++){
		createSelect(selects[i],i);
	}

	function createSelect(select_container,index){

		//鍒涘缓select瀹瑰櫒锛宑lass涓簊elect_box锛屾彃鍏ュ埌select鏍囩鍓�
		var tag_select=$('<div></div>');//div鐩稿綋浜巗elect鏍囩
		tag_select.attr('class','select_box');
		tag_select.insertBefore(select_container);

		//鏄剧ず妗哻lass涓簊elect_showbox,鎻掑叆鍒板垱寤虹殑tag_select涓�
		var select_showbox=$('<div></div>');//鏄剧ず妗�
		select_showbox.css('cursor','pointer').attr('class','select_showbox').appendTo(tag_select);

		//鍒涘缓option瀹瑰櫒锛宑lass涓簊elect_option锛屾彃鍏ュ埌鍒涘缓鐨則ag_select涓�
		var ul_option=$('<ul></ul>');//鍒涘缓option鍒楄〃
		ul_option.attr('class','select_option');
		ul_option.appendTo(tag_select);
		createOptions(index,ul_option);//鍒涘缓option

		//鐐瑰嚮鏄剧ず妗�
		tag_select.toggle(function(){
			ul_option.show();
		},function(){
			ul_option.hide();
		});

		var li_option=ul_option.find('li');
		li_option.on('click',function(){
			$(this).addClass('selected').siblings().removeClass('selected');
			var value=$(this).text();
			select_showbox.text(value);
			ul_option.hide();
		});

		li_option.hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover');	
		},function(){
			li_option.removeClass('hover');
		});

	}

	function createOptions(index,ul_list){
		//鑾峰彇琚€変腑鐨勫厓绱犲苟灏嗗叾鍊艰祴鍊煎埌鏄剧ず妗嗕腑
		var options=selects.eq(index).find('option'),
			selected_option=options.filter(':selected'),
			selected_index=selected_option.index(),
			showbox=ul_list.prev();
			showbox.text(selected_option.text());
		
		//涓烘瘡涓猳ption寤虹珛涓猯i骞惰祴鍊�
		for(var n=0;n<options.length;n++){
			var tag_option=$('<li></li>'),//li鐩稿綋浜巓ption
				txt_option=options.eq(n).text();
			tag_option.text(txt_option).css('cursor','pointer').appendTo(ul_list);

			//涓鸿閫変腑鐨勫厓绱犳坊鍔燾lass涓簊elected
			if(n==selected_index){
				tag_option.attr('class','selected');
			}
		}
	}

})(jQuery)