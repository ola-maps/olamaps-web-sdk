import { GeolocateControlOptions } from 'maplibre-gl';
import { Map as Map_2 } from 'maplibre-gl';
import { MapOptions } from 'maplibre-gl';
import { MarkerOptions } from 'maplibre-gl';
import { NavigationControlOptions } from 'maplibre-gl';
import * as OlaMapsGl from 'maplibre-gl';
import { PopupOptions } from 'maplibre-gl';

declare type MapMethods = {
    [key: string]: any;
};

declare interface olaMapProps {
    apiKey: string;
    mode?: string;
    threedTileset?: string;
    accessToken?: string;
}

export declare class OlaMaps {
    private olaMaps;
    private apiKey;
    private accessToken;
    mode: string;
    private threedTileset;
    constructor({ apiKey, accessToken, mode, threedTileset }: olaMapProps);
    private addOlaLogo;
    private addAttribution;
    private fetchStaticMap;
    private add3dLayer;
    init(options?: MapOptions): Map_2 & MapMethods;
    addNavigationControls(options?: NavigationControlOptions): OlaMapsGl.NavigationControl;
    addGeolocateControls(options: GeolocateControlOptions): OlaMapsGl.GeolocateControl;
    getMercatorCoordinate(): typeof OlaMapsGl.MercatorCoordinate;
    addMarker(options?: MarkerOptions): OlaMapsGl.Marker;
    addPopup(options?: PopupOptions): OlaMapsGl.Popup;
    getStaticMap(url: string, elementID: string): void;
}

export { }
