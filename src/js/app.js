import $ from 'jquery';
import 'slick-carousel';
import {TweenMax, Power2, TimelineLite} from 'gsap';

$('.js-blogslider').slick();

TweenMax.from('.js-header' ,1, {scale:0, delay:0.3});
TweenMax.from('.js-nav' ,1, {scale:0, delay:0.3});
TweenMax.from('.js-blogpost' ,1, {scale:0, delay:0.5});
TweenMax.from('.js-blogsidebar' ,1, {scale:0, delay:1});

