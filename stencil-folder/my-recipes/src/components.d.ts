/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyRating {
        "headline": string;
        "rate": string;
    }
    interface RecipeRatings {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyRatingElement extends Components.MyRating, HTMLStencilElement {
    }
    var HTMLMyRatingElement: {
        prototype: HTMLMyRatingElement;
        new (): HTMLMyRatingElement;
    };
    interface HTMLRecipeRatingsElement extends Components.RecipeRatings, HTMLStencilElement {
    }
    var HTMLRecipeRatingsElement: {
        prototype: HTMLRecipeRatingsElement;
        new (): HTMLRecipeRatingsElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-rating": HTMLMyRatingElement;
        "recipe-ratings": HTMLRecipeRatingsElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyRating {
        "headline"?: string;
        "rate"?: string;
    }
    interface RecipeRatings {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-rating": MyRating;
        "recipe-ratings": RecipeRatings;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-rating": LocalJSX.MyRating & JSXBase.HTMLAttributes<HTMLMyRatingElement>;
            "recipe-ratings": LocalJSX.RecipeRatings & JSXBase.HTMLAttributes<HTMLRecipeRatingsElement>;
        }
    }
}
