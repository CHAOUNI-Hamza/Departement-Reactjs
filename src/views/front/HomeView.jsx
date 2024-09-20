import React from 'react';

import '../../css/home.css';

export default function HomeView() {
  return (
    <>
    <ul className="nav justify-content-center bar-top">
    <li className="nav-item">
    <a className="nav-link">FACULTE DES LETTRES ET DES SCIENCES HUMAINES</a>
  </li>
  <li className="nav-item">
    <a className="nav-link">Tél. : 06 10 20 52 13</a>
  </li>
  <li className="nav-item">
    <a className="nav-link">Email : flshm@flshm.ma</a>
  </li>
  <li className="nav-item">
    <a className="nav-link">AVENUE HASSAN II B.P. 546 MOHAMMEDIA</a>
  </li>
</ul>



<nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="./images/logo.png" alt="" width={'30%'} />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto text-right">
        <li className="nav-item active">
          <a className="nav-link" href="#">اللغة الفرنسية وآدابها</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">اللغة الأنجليزية وآدابها</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">علم النفس</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">الإسبانية وآدابها</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">التاريخ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">علم الاجتماع</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">اللغة العربية وآدابها</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">الدراسات الإسلامية</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">الجغرافيا</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="./images/slider/1.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>علم الاجتماع</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./images/slider/2.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>الدراسات الإسلامية</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./images/slider/3.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>الجغرافيا</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./images/slider/4.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>اللغة العربية وآدابها</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./images/slider/5.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>التاريخ</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./images/slider/6.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>علم النفس</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./images/slider/6.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>اللغة الفرنسية وآدابها</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./images/slider/6.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>اللغة الأنجليزية وآدابها</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./images/slider/6.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>الإسبانية وآدابها</h5>
      </div>
    </div>

  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>





    <div className='card-departement container'>
      <div className='row'>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/1.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">اللغة الفرنسية وآدابها</h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/1.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">اللغة الأنجليزية وآدابها</h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/5.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">علم النفس</h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/1.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">الإسبانية وآدابها</h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/6.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">التاريخ  </h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/1.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">علم الاجتماع</h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/1.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">اللغة العربية وآدابها</h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/2.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">الدراسات الإسلامية</h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
        <div className='col-12 col-md-4'>
          
<div class="card">
<img src="./images/card/3.jpg" class="card-img-top" alt="..." />
<h5 class="titre text-end">الجغرافيا</h5>
<div class="card-body">
  <p class="card-text text-justify" dir='rtl'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج</p>
  <a href="#" class="btn text-right">... المزيد</a>
</div>
</div>
        </div>
      </div>
    </div>

    
    </>
    

  );
}
