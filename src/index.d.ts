
declare module AppStore {

	interface Action {
		readonly type?: string;
        readonly payload?: any;
        readonly meta?: string
        readonly field?: string // point to a dynamic field in store
				readonly promise?:  Promise<void>
	}

    interface ShapeMakeActionPayload {
        color: String,
        height: number,
        width: number,
        top: number,
        left: number
    }

    interface ShapeMakeAction extends Action {
        readonly payload?: ShapeMakeActionPayload;
    }

    interface ShapeViewerPayload {
        id: number,
        top: number,
        left: number
    }

    interface ShapeViewerAction extends Action {
        readonly payload?: ShapeViewerPayload;
    }

    interface State {
				repositories: RepItemShape[]
    }

		interface RepsShape {
				total_count: number,
				incomplete_results: boolean,
				items: Array<RepItemShape>,
		}

		interface RepItemShape {
				id: number,
				name: string,
				private: boolean,
				description: string,
				language: string,
				stargazers_count: number,
		}


    interface AspectRatioState {
        width: number;
        height: number;
    }

    interface Shape {
        id: number
        width: number,
        height: number,
        color: string,
        top: number,
        left: number
    }

    interface StoreHistory {
        states: State[],
        stateIndex: number,
        reset: () => void,
        prev: () => State,
        next: () => State,
        goTo: (index: number) => State,
        canPrev: () => boolean,
        canNext: () => boolean,
        pushState: (nextState: State) => void
    }

		interface FetchOptions {
			method?: "GET" | "POST" | "DELETE" | "PATCH" | "PUT" | "HEAD" | "OPTIONS" | "CONNECT";
    	headers?: any;
    	body?: any;
    	mode?: "cors" | "no-cors" | "same-origin";
    	credentials?: "omit" | "same-origin" | "include";
    	cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
    	redirect?: "follow" | "error" | "manual";
    	referrer?: string;
    	referrerPolicy?: "referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "unsafe-url";
			integrity?: any;
		}

		declare enum ResponseType {
			Basic,
			Cors,
			Default,
			Error,
			Opaque
		}
}
