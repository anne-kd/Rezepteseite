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
    interface MyFooter {
    }
    interface MyRating {
        "headline": string;
        "rate": string;
    }
    interface MySocialShare {
    }
    interface RecipeOverview {
        "btnText": string;
        "headline": string;
    }
    interface RecipeRatings {
    }
    interface TitleTitleimage {
        "btnText": string;
        "btnVisible": boolean;
        "imageAlt": string;
        "imageUrl": string;
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
    interface HTMLMyFooterElement extends Components.MyFooter, HTMLStencilElement {
    }
    var HTMLMyFooterElement: {
        prototype: HTMLMyFooterElement;
        new (): HTMLMyFooterElement;
    };
    interface HTMLMyRatingElement extends Components.MyRating, HTMLStencilElement {
    }
    var HTMLMyRatingElement: {
        prototype: HTMLMyRatingElement;
        new (): HTMLMyRatingElement;
    };
    interface HTMLMySocialShareElement extends Components.MySocialShare, HTMLStencilElement {
    }
    var HTMLMySocialShareElement: {
        prototype: HTMLMySocialShareElement;
        new (): HTMLMySocialShareElement;
    };
    interface HTMLRecipeOverviewElement extends Components.RecipeOverview, HTMLStencilElement {
    }
    var HTMLRecipeOverviewElement: {
        prototype: HTMLRecipeOverviewElement;
        new (): HTMLRecipeOverviewElement;
    };
    interface HTMLRecipeRatingsElement extends Components.RecipeRatings, HTMLStencilElement {
    }
    var HTMLRecipeRatingsElement: {
        prototype: HTMLRecipeRatingsElement;
        new (): HTMLRecipeRatingsElement;
    };
    interface HTMLTitleTitleimageElement extends Components.TitleTitleimage, HTMLStencilElement {
    }
    var HTMLTitleTitleimageElement: {
        prototype: HTMLTitleTitleimageElement;
        new (): HTMLTitleTitleimageElement;
    };
    interface HTMLElementTagNameMap {
        "add-new-rating": HTMLAddNewRatingElement;
        "my-component": HTMLMyComponentElement;
        "my-footer": HTMLMyFooterElement;
        "my-rating": HTMLMyRatingElement;
        "my-social-share": HTMLMySocialShareElement;
        "recipe-overview": HTMLRecipeOverviewElement;
        "recipe-ratings": HTMLRecipeRatingsElement;
        "title-titleimage": HTMLTitleTitleimageElement;
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
    interface MyFooter {
    }
    interface MyRating {
        "headline"?: string;
        "rate"?: string;
    }
    interface MySocialShare {
    }
    interface RecipeOverview {
        "btnText"?: string;
        "headline"?: string;
    }
    interface RecipeRatings {
        "onAdd"?: (event: CustomEvent<any>) => void;
    }
    interface TitleTitleimage {
        "btnText"?: string;
        "btnVisible"?: boolean;
        "imageAlt"?: string;
        "imageUrl"?: string;
    }
    interface IntrinsicElements {
        "add-new-rating": AddNewRating;
        "my-component": MyComponent;
        "my-footer": MyFooter;
        "my-rating": MyRating;
        "my-social-share": MySocialShare;
        "recipe-overview": RecipeOverview;
        "recipe-ratings": RecipeRatings;
        "title-titleimage": TitleTitleimage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "add-new-rating": LocalJSX.AddNewRating & JSXBase.HTMLAttributes<HTMLAddNewRatingElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-footer": LocalJSX.MyFooter & JSXBase.HTMLAttributes<HTMLMyFooterElement>;
            "my-rating": LocalJSX.MyRating & JSXBase.HTMLAttributes<HTMLMyRatingElement>;
            "my-social-share": LocalJSX.MySocialShare & JSXBase.HTMLAttributes<HTMLMySocialShareElement>;
            "recipe-overview": LocalJSX.RecipeOverview & JSXBase.HTMLAttributes<HTMLRecipeOverviewElement>;
            "recipe-ratings": LocalJSX.RecipeRatings & JSXBase.HTMLAttributes<HTMLRecipeRatingsElement>;
            "title-titleimage": LocalJSX.TitleTitleimage & JSXBase.HTMLAttributes<HTMLTitleTitleimageElement>;
        }
    }
}
