import React, { Component } from 'react';

export class SecondInfomation extends Component {

	render() {
		return <div className="col-md-9">
				<div className="card maincard">
				 	<div className="card-header bg-primary text-white text-center font-weight-bold">
				 		Bản Quyền
				 	</div>
				 	<div className="card-body">
				 		<div className="text-center">
				 			<img src={`${process.env.PUBLIC_URL}/images/Books.png`} />
				 		</div>
				 		<p>
				 			Toàn bộ ebook có trên website đều có bản quyền thuộc về 
				 			tác giả, Sachvui.Com khuyến khích các bạn nếu có khả năng
				 			hãy mua sách để ủng hộ tác giả
				 		</p>
				 		<p>
				 			Ebook được sưu tập và tổng hợp từ các nguồn trên internet 
				 			( tve , e-thuvien , tinhte  .... ) và các dự án ebook của 
				 			cộng đồng.Chúng tôi chỉ chia sẻ lại cho cộng đồng ,
				 			và không bán những ebook này, toàn bộ ebook 
				 			có trên web đều được chia sẻ miễn phí
				 		</p>
				 		<p>
				 			Mọi cá nhân hay tổ chức nếu muốn in ấn hay phát hành sách 
				 			từ Sachhay.com phải được sự cho phép của tác giả, chúng tôi
				 			không khuyến khích việc thương mại hóa các ebook này.
				 		</p>
				 	</div>
				</div>
		</div>
	}
}