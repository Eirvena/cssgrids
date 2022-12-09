const gridLayouts = [{
        id: 'grid1',
        title: 'Layout 1',
        thumbnailSrc: '/assets/img/thumbnails/thumbnail-1.png',
        images: [
            '/assets/img/grid-images/grid-1/grid1-image-1.png',
            '/assets/img/grid-images/grid-1/grid1-image-2.png',
            '/assets/img/grid-images/grid-1/grid1-image-3.png',
            '/assets/img/grid-images/grid-1/grid1-image-4.png',
            '/assets/img/grid-images/grid-1/grid1-image-5.png',
            '/assets/img/grid-images/grid-1/grid1-image-6.png'
        ],
        htmlCode: `
<div class="grid">
    <div class="grid-box box-1">
        <img class="grid-img" src="/assets/img/grid-images/grid-1/grid1-image-1.png">
    </div>
    <div class="grid-box box-2">
        <img class="grid-img" src="/assets/img/grid-images/grid-1/grid1-image-2.png">
    </div>
    <div class="grid-box box-3">
        <img class="grid-img" src="/assets/img/grid-images/grid-1/grid1-image-3.png">
    </div>
    <div class="grid-box box-4">
        <img class="grid-img" src="/assets/img/grid-images/grid-1/grid1-image-4.png">
    </div>
    <div class="grid-box box-5">
        <img class="grid-img" src="/assets/img/grid-images/grid-1/grid1-image-5.png">
    </div>
    <div class="grid-box box-6">
        <img class="grid-img" src="/assets/img/grid-images/grid-1/grid1-image-6.png">
    </div>
</div>`,
        cssCode: `
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 12px;
}
.grid-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.grid-box {
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #e0e0e0;
}
.box-1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
}
.box-2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
}
.box-3 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}
.box-4 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
}
.box-5 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
}
.box-6 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
}`
    },
    {
        id: 'grid2',
        title: 'Layout 2',
        thumbnailSrc: '/assets/img/thumbnails/thumbnail-2.png',
        images: [
            '/assets/img/grid-images/grid-2/grid2-image-1.png',
            '/assets/img/grid-images/grid-2/grid2-image-2.png',
            '/assets/img/grid-images/grid-2/grid2-image-3.png',
            '/assets/img/grid-images/grid-2/grid2-image-4.png'
        ],
        htmlCode: `
<div class="grid">
    <div class="grid-box box-1">
        <img class="grid-img" src="/assets/img/grid-images/grid-2/grid2-image-1.png">
    </div>
    <div class="grid-box box-2">
        <img class="grid-img" src="/assets/img/grid-images/grid-2/grid2-image-2.png">
    </div>
    <div class="grid-box box-3">
        <img class="grid-img" src="/assets/img/grid-images/grid-2/grid2-image-3.png">
    </div>
    <div class="grid-box box-4">
        <img class="grid-img" src="/assets/img/grid-images/grid-2/grid2-image-4.png">
    </div>
</div>`,
        cssCode: `
.grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 12px;
}
.grid-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.grid-box {
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #e0e0e0;
}
.box-1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
}
.box-2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
}
.box-3 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}
.box-4 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
}`
    },
    {
        id: 'grid3',
        title: 'Layout 3',
        thumbnailSrc: '/assets/img/thumbnails/thumbnail-3.png',
        images: [
            '/assets/img/grid-images/grid-3/grid3-image-1.png',
            '/assets/img/grid-images/grid-3/grid3-image-2.png',
            '/assets/img/grid-images/grid-3/grid3-image-3.png',
            '/assets/img/grid-images/grid-3/grid3-image-4.png'
        ],
        htmlCode: `
<div class="grid">
    <div class="grid-box box-1">
        <img class="grid-img" src="/assets/img/grid-images/grid-3/grid3-image-1.png">
    </div>
    <div class="grid-box box-2">
        <img class="grid-img" src="/assets/img/grid-images/grid-3/grid3-image-2.png">
    </div>
    <div class="grid-box box-3">
        <img class="grid-img" src="/assets/img/grid-images/grid-3/grid3-image-3.png">
    </div>
    <div class="grid-box box-4">
        <img class="grid-img" src="/assets/img/grid-images/grid-3/grid3-image-4.png">
    </div>
</div>`,
        cssCode: `
.grid {
    display: grid;
    grid-template-columns: auto;
    gap: 12px;
}
.grid-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.grid-box {
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #e0e0e0;
}
.box-1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
}
.box-2 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
}
.box-3 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
}
.box-4 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;
}`
    },
    {
        id: 'grid4',
        title: 'Layout 4',
        thumbnailSrc: '/assets/img/thumbnails/thumbnail-4.png',
        images: [
            '/assets/img/grid-images/grid-4/grid4-image-1.png',
            '/assets/img/grid-images/grid-4/grid4-image-2.png',
            '/assets/img/grid-images/grid-4/grid4-image-3.png',
            '/assets/img/grid-images/grid-4/grid4-image-4.png'
        ],
        htmlCode: `
<div class="grid">
    <div class="grid-box box-1">
        <img class="grid-img" src="/assets/img/grid-images/grid-4/grid4-image-1.png">
    </div>
    <div class="grid-box box-2">
        <img class="grid-img" src="/assets/img/grid-images/grid-4/grid4-image-2.png">
    </div>
    <div class="grid-box box-3">
        <img class="grid-img" src="/assets/img/grid-images/grid-4/grid4-image-3.png">
    </div>
    <div class="grid-box box-4">
        <img class="grid-img" src="/assets/img/grid-images/grid-4/grid4-image-4.png">
    </div>
</div>`,
        cssCode: `
.grid {
    display: grid;
    grid-template-columns: auto;
    gap: 12px;
}
.grid-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.grid-box {
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #e0e0e0;
}
.box-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
}
.box-2 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
}
.box-3 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
}
.box-4 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;
}`
    }
];

export default gridLayouts;