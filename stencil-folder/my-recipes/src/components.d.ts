/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AddNewRating {
    }
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
    interface MyFooter {
    }
    interface MySocialShare {
    }
}
declare global {
    interface HTMLAddNewRatingElement extends Components.AddNewRating, HTMLStencilElement {
    }
    var HTMLAddNewRatingElement: {
        prototype: HTMLAddNewRatingElement;
        new (): HTMLAddNewRatingElement;
    };
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
    }
    interface HTMLMyFooterElement extends Components.MyFooter, HTMLStencilElement {
    }
    var HTMLMyFooterElement: {
        prototype: HTMLMyFooterElement;
        new (): HTMLMyFooterElement;
    };
    interface HTMLMySocialShareElement extends Components.MySocialShare, HTMLStencilElement {
    }
    var HTMLMySocialShareElement: {
        prototype: HTMLMySocialShareElement;
        new (): HTMLMySocialShareElement;
    };
    interface HTMLElementTagNameMap {
        "add-new-rating": HTMLAddNewRatingElement;
        "my-component": HTMLMyComponentElement;
        "my-rating": HTMLMyRatingElement;
        "recipe-ratings": HTMLRecipeRatingsElement;
        "my-footer": HTMLMyFooterElement;
        "my-social-share": HTMLMySocialShareElement;
    }
}
declare namespace LocalJSX {
    interface AddNewRating {
        "onButtonClickCancel"?: (event: CustomEvent<any>) => void;
        "onButtonClickOK"?: (event: CustomEvent<any>) => void;
        "onTextChanged"?: (event: CustomEvent<string>) => void;
        "onTitleChanged"?: (event: CustomEvent<string>) => void;
    }
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
        "onAdd"?: (event: CustomEvent<any>) => void;
    }
    interface MyFooter {
    }
    interface MySocialShare {
    }
    interface IntrinsicElements {
        "add-new-rating": AddNewRating;
        "my-component": MyComponent;
        "my-rating": MyRating;
        "recipe-ratings": RecipeRatings;
        "my-footer": MyFooter;
        "my-social-share": MySocialShare;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "add-new-rating": LocalJSX.AddNewRating & JSXBase.HTMLAttributes<HTMLAddNewRatingElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-rating": LocalJSX.MyRating & JSXBase.HTMLAttributes<HTMLMyRatingElement>;
            "recipe-ratings": LocalJSX.RecipeRatings & JSXBase.HTMLAttributes<HTMLRecipeRatingsElement>;
            "my-footer": LocalJSX.MyFooter & JSXBase.HTMLAttributes<HTMLMyFooterElement>;
            "my-social-share": LocalJSX.MySocialShare & JSXBase.HTMLAttributes<HTMLMySocialShareElement>;
        }
    }
}
