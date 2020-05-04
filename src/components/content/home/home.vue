<template>
    <div class="slider__container">
        <button id="prev" class="slider__button slider__button-prev" @click="changeSlide(-1)">
            <img src="@icons/arrow.svg">
        </button>
        <div class="slide active" >
            <img src="@images/blackWhite.jpg">
        </div>
        <div class="slide" >
            <img src="@images/album1.jpg">
        </div>
        <div class="slide">
            <img src="@images/sex.jpg">
        </div>
        <button id="next" class="slider__button slider__button-next" @click="changeSlide(1)">
            <img src="@icons/arrow.svg">
        </button>
    </div>
</template>

<script src="./home.js" />

