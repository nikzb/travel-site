import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const featureRevealOnScroll = new RevealOnScroll($(".feature-item"), "85%");
const testimonialRevealOnScroll = new RevealOnScroll($(".testimonial"), "70%");
const stickyHeader = new StickyHeader();
var modal = new Modal();
