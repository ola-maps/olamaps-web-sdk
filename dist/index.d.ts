import * as OlaMapsGl from 'maplibre-gl';

export declare type AddLayerObject = OlaMaps.AddLayerObject;

export declare type AddProtocolAction = OlaMaps.AddProtocolAction;

export declare type AJAXError = OlaMaps.AJAXError;

export declare type AttributionControl = OlaMaps.AttributionControl;

export declare type AttributionControlOptions = OlaMaps.AttributionControlOptions;

export declare type BBox = OlaMaps.BBox;

export declare type CanvasSource = OlaMaps.CanvasSource;

export declare type Coordinates = OlaMaps.Coordinates;

export declare type CustomLayerInterface = OlaMaps.CustomLayerInterface;

export declare const default3dTIleset = "https://api.olamaps.io/tiles/vector/v1/3dtiles/tileset.json";

export declare const defaultStyleJson = "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json?key=0.4.0";

export declare type ErrorLike = OlaMaps.ErrorLike;

export declare type Feature = OlaMaps.Feature;

export declare type FeatureCollection = OlaMaps.FeatureCollection;

export declare type FeatureIdentifier = OlaMaps.FeatureIdentifier;

export declare type FeatureStates = OlaMaps.FeatureStates;

export declare type FullscreenControl = OlaMaps.FullscreenControl;

export declare type FullscreenControlOptions = OlaMaps.FullscreenControlOptions;

declare type GeoJSON_2 = OlaMaps.GeoJSON;
export { GeoJSON_2 as GeoJSON }

export declare type GeoJSONFeature = OlaMaps.GeoJSONFeature;

export declare type GeoJSONFeatureId = OlaMaps.GeoJSONFeatureId;

export declare type GeoJSONPoint = OlaMaps.GeoJSONPoint;

export declare type GeoJsonProperties = OlaMaps.GeoJsonProperties;

export declare type GeoJSONSource = OlaMaps.GeoJSONSource;

export declare type GeoJSONSourceDiff = OlaMaps.GeoJSONSourceDiff;

export declare type GeoJSONSourceOptions = OlaMaps.GeoJSONSourceOptions;

export declare type GeolocateControl = OlaMaps.GeolocateControl;

export declare type GeolocateControlOptions = OlaMaps.GeolocateControlOptions;

export declare type Geometry = OlaMaps.Geometry;

export declare type GeometryCollection = OlaMaps.GeometryCollection;

export declare const getCookie: (name: string) => string;

export declare const getOlaMapIcon: (oemColor: string) => string;

export declare type GetResourceResponse<T> = OlaMaps.GetResourceResponse<T>;

export declare type IControl = OlaMaps.IControl;

export declare type ImageSource = OlaMaps.ImageSource;

export declare type LayerSpecification = OlaMaps.LayerSpecification;

export declare type LineString = OlaMaps.LineString;

export declare type LngLat = OlaMaps.LngLat;

export declare type LngLatBounds = OlaMaps.LngLatBounds;

export declare type LngLatLike = OlaMaps.LngLatLike;

declare type Map_2 = OlaMaps.Map;
export { Map_2 as Map }

export declare type MapDataEvent = OlaMaps.MapDataEvent;

export declare type MapEventType = OlaMaps.MapEventType;

export declare type MapGeoJSONFeature = OlaMaps.MapGeoJSONFeature;

export declare type MapLayerMouseEvent = OlaMaps.MapLayerMouseEvent;

export declare type MapLayerTouchEvent = OlaMaps.MapLayerTouchEvent;

declare type MapMethods = {
    [key: string]: any;
};

export declare type MapMouseEvent = OlaMaps.MapMouseEvent;

export declare type MapOptions = OlaMaps.MapOptions;

export declare type MapProjectionEvent = OlaMaps.MapProjectionEvent;

export declare type MapSourceDataEvent = OlaMaps.MapSourceDataEvent;

declare interface MapStyle {
    id: string;
    styleJson: string;
}

export declare type MapStyleDataEvent = OlaMaps.MapStyleDataEvent;

export declare type mapStyleIds = "bolt-dark" | "bolt-light" | "eclipse-dark-lite" | "eclipse-dark-standard" | "eclipse-dark-full" | "eclipse-light-lite" | "eclipse-light-standard" | "eclipse-light-full" | "vintage-dark" | "vintage-light" | "positron" | "osm-bright" | "osm-basic" | "dark-matter" | "fiord-color" | "default-light-lite" | "default-light-standard" | "default-ultra-light-standard" | "default-light-standard-hi" | "default-light-standard-kn" | "default-light-standard-mr" | "default-light-standard-te" | "default-light-standard-ta" | "default-light-standard-ml" | "default-light-standard-regional" | "default-light-full" | "default-dark-lite" | "default-dark-standard" | "default-dark-standard-hi" | "default-dark-standard-mr" | "default-dark-standard-kn" | "default-dark-standard-ta" | "default-dark-standard-te" | "default-dark-standard-ride-stat" | "default-dark-full" | "default-earth-lite" | "default-earth-standard" | "default-earth-full" | "silver-osm";

export declare type MapTerrainEvent = OlaMaps.MapTerrainEvent;

export declare type MapTouchEvent = OlaMaps.MapTouchEvent;

export declare type MapWheelEvent = OlaMaps.MapWheelEvent;

export declare type Marker = OlaMaps.Marker;

export declare type MarkerOptions = OlaMaps.MarkerOptions;

export declare type MercatorCoordinate = OlaMaps.MercatorCoordinate;

export declare type MultiLineString = OlaMaps.MultiLineString;

export declare type MultiPoint = OlaMaps.MultiPoint;

export declare type MultiPolygon = OlaMaps.MultiPolygon;

export declare type NavigationControl = OlaMaps.NavigationControl;

export declare type NavigationControlOptions = OlaMaps.NavigationControlOptions;

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
    static Marker: typeof OlaMapsGl.Marker;
    static Popup: typeof OlaMapsGl.Popup;
    static NavigationControl: typeof OlaMapsGl.NavigationControl;
    static GeolocateControl: typeof OlaMapsGl.GeolocateControl;
    static ScaleControl: typeof OlaMapsGl.ScaleControl;
    static FullscreenControl: typeof OlaMapsGl.FullscreenControl;
    static AttributionControl: typeof OlaMapsGl.AttributionControl;
    static TerrainControl: typeof OlaMapsGl.TerrainControl;
    static LngLat: typeof OlaMapsGl.LngLat;
    static LngLatBounds: typeof OlaMapsGl.LngLatBounds;
    static Point: typeof OlaMapsGl.Point;
    static MercatorCoordinate: typeof OlaMapsGl.MercatorCoordinate;
    static MapMouseEvent: typeof OlaMapsGl.MapMouseEvent;
    static MapTouchEvent: typeof OlaMapsGl.MapTouchEvent;
    static MapWheelEvent: typeof OlaMapsGl.MapWheelEvent;
    static AJAXError: typeof OlaMapsGl.AJAXError;
    constructor({ apiKey, accessToken, mode, threedTileset }: olaMapProps);
    private addOlaLogo;
    private addAttribution;
    private fetchStaticMap;
    private add3dLayer;
    init(options?: OlaMapsGl.MapOptions): OlaMapsGl.Map & MapMethods;
    addNavigationControls(options?: OlaMapsGl.NavigationControlOptions): OlaMapsGl.NavigationControl;
    addGeolocateControls(options: OlaMapsGl.GeolocateControlOptions): OlaMapsGl.GeolocateControl;
    getMercatorCoordinate(): typeof OlaMapsGl.MercatorCoordinate;
    addMarker(options?: OlaMapsGl.MarkerOptions): OlaMapsGl.Marker;
    addPopup(options?: OlaMapsGl.PopupOptions): OlaMapsGl.Popup;
    getStaticMap(url: string, elementID: string): void;
}

export declare namespace OlaMaps {
    export type Marker = OlaMapsGl.Marker;
    export type Popup = OlaMapsGl.Popup;
    export type NavigationControl = OlaMapsGl.NavigationControl;
    export type GeolocateControl = OlaMapsGl.GeolocateControl;
    export type ScaleControl = OlaMapsGl.ScaleControl;
    export type FullscreenControl = OlaMapsGl.FullscreenControl;
    export type AttributionControl = OlaMapsGl.AttributionControl;
    export type TerrainControl = OlaMapsGl.TerrainControl;
    export type Map = OlaMapsGl.Map;
    export type MapOptions = OlaMapsGl.MapOptions;
    export type MarkerOptions = OlaMapsGl.MarkerOptions;
    export type PopupOptions = OlaMapsGl.PopupOptions;
    export type NavigationControlOptions = OlaMapsGl.NavigationControlOptions;
    export type GeolocateControlOptions = OlaMapsGl.GeolocateControlOptions;
    export type ScaleControlOptions = OlaMapsGl.ScaleControlOptions;
    export type FullscreenControlOptions = OlaMapsGl.FullscreenControlOptions;
    export type AttributionControlOptions = OlaMapsGl.AttributionControlOptions;
    export type StyleSpecification = OlaMapsGl.StyleSpecification;
    export type LayerSpecification = OlaMapsGl.LayerSpecification;
    export type SourceSpecification = OlaMapsGl.SourceSpecification;
    export type StyleOptions = OlaMapsGl.StyleOptions;
    export type StyleSetterOptions = OlaMapsGl.StyleSetterOptions;
    export type AddLayerObject = OlaMapsGl.AddLayerObject;
    export type GeoJSONSource = OlaMapsGl.GeoJSONSource;
    export type GeoJSONSourceOptions = OlaMapsGl.GeoJSONSourceOptions;
    export type GeoJSONSourceDiff = OlaMapsGl.GeoJSONSourceDiff;
    export type GeoJSONFeatureId = OlaMapsGl.GeoJSONFeatureId;
    export type VectorTileSource = OlaMapsGl.VectorTileSource;
    export type RasterTileSource = OlaMapsGl.RasterTileSource;
    export type ImageSource = OlaMapsGl.ImageSource;
    export type CanvasSource = OlaMapsGl.CanvasSource;
    export type VideoSource = OlaMapsGl.VideoSource;
    export type LngLat = OlaMapsGl.LngLat;
    export type LngLatLike = OlaMapsGl.LngLatLike;
    export type LngLatBounds = OlaMapsGl.LngLatBounds;
    export type Point = OlaMapsGl.Point;
    export type MercatorCoordinate = OlaMapsGl.MercatorCoordinate;
    export type Coordinates = OlaMapsGl.Coordinates;
    export type Feature = OlaMapsGl.Feature;
    export type MapGeoJSONFeature = OlaMapsGl.MapGeoJSONFeature;
    export type GeoJSONFeature = OlaMapsGl.GeoJSONFeature;
    export type FeatureStates = OlaMapsGl.FeatureStates;
    export type FeatureIdentifier = OlaMapsGl.FeatureIdentifier;
    export type GeoJSON = GeoJSON.GeoJSON;
    export type Geometry = GeoJSON.Geometry;
    export type GeometryCollection = GeoJSON.GeometryCollection;
    export type GeoJSONPoint = GeoJSON.Point;
    export type MultiPoint = GeoJSON.MultiPoint;
    export type LineString = GeoJSON.LineString;
    export type MultiLineString = GeoJSON.MultiLineString;
    export type Polygon = GeoJSON.Polygon;
    export type MultiPolygon = GeoJSON.MultiPolygon;
    export type FeatureCollection = GeoJSON.FeatureCollection;
    export type GeoJsonProperties = GeoJSON.GeoJsonProperties;
    export type Position = GeoJSON.Position;
    export type BBox = GeoJSON.BBox;
    export type QueryRenderedFeaturesOptions = OlaMapsGl.QueryRenderedFeaturesOptions;
    export type QuerySourceFeatureOptions = OlaMapsGl.QuerySourceFeatureOptions;
    export type QueryRenderedFeaturesResults = OlaMapsGl.QueryRenderedFeaturesResults;
    export type MapMouseEvent = OlaMapsGl.MapMouseEvent;
    export type MapTouchEvent = OlaMapsGl.MapTouchEvent;
    export type MapWheelEvent = OlaMapsGl.MapWheelEvent;
    export type MapLayerMouseEvent = OlaMapsGl.MapLayerMouseEvent;
    export type MapLayerTouchEvent = OlaMapsGl.MapLayerTouchEvent;
    export type MapDataEvent = OlaMapsGl.MapDataEvent;
    export type MapSourceDataEvent = OlaMapsGl.MapSourceDataEvent;
    export type MapStyleDataEvent = OlaMapsGl.MapStyleDataEvent;
    export type MapTerrainEvent = OlaMapsGl.MapTerrainEvent;
    export type MapProjectionEvent = OlaMapsGl.MapProjectionEvent;
    export type OlaMapsEvent = OlaMapsGl.MapLibreEvent;
    export type OlaMapsZoomEvent = OlaMapsGl.MapLibreZoomEvent;
    export type MapEventType = OlaMapsGl.MapEventType;
    export type AJAXError = OlaMapsGl.AJAXError;
    export type ErrorLike = OlaMapsGl.ErrorLike;
    export type IControl = OlaMapsGl.IControl;
    export type CustomLayerInterface = OlaMapsGl.CustomLayerInterface;
    export type RequestParameters = OlaMapsGl.RequestParameters;
    export type GetResourceResponse<T> = OlaMapsGl.GetResourceResponse<T>;
    export type AddProtocolAction = OlaMapsGl.AddProtocolAction;
    export type RequestTransformFunction = OlaMapsGl.RequestTransformFunction;
    export type TileState = OlaMapsGl.TileState;
}

export declare type OlaMapsEvent = OlaMaps.OlaMapsEvent;

export declare type OlaMapStyle = MapStyle[];

export declare type OlaMapsZoomEvent = OlaMaps.OlaMapsZoomEvent;

export declare type Point = OlaMaps.Point;

export declare type Polygon = OlaMaps.Polygon;

export declare type Popup = OlaMaps.Popup;

export declare type PopupOptions = OlaMaps.PopupOptions;

export declare type Position = OlaMaps.Position;

export declare type QueryRenderedFeaturesOptions = OlaMaps.QueryRenderedFeaturesOptions;

export declare type QueryRenderedFeaturesResults = OlaMaps.QueryRenderedFeaturesResults;

export declare type QuerySourceFeatureOptions = OlaMaps.QuerySourceFeatureOptions;

export declare type RasterTileSource = OlaMaps.RasterTileSource;

export declare type RequestParameters = OlaMaps.RequestParameters;

export declare type RequestTransformFunction = OlaMaps.RequestTransformFunction;

export declare type ScaleControl = OlaMaps.ScaleControl;

export declare type ScaleControlOptions = OlaMaps.ScaleControlOptions;

export declare const setCookie: (name: string, value: string, days?: number) => void;

export declare type SourceSpecification = OlaMaps.SourceSpecification;

export declare type StyleOptions = OlaMaps.StyleOptions;

export declare type StyleSetterOptions = OlaMaps.StyleSetterOptions;

export declare type StyleSpecification = OlaMaps.StyleSpecification;

export declare type TerrainControl = OlaMaps.TerrainControl;

export declare type TileState = OlaMaps.TileState;

export declare type VectorTileSource = OlaMaps.VectorTileSource;

export declare type VideoSource = OlaMaps.VideoSource;

export { }


declare namespace OlaMaps {
    type Marker = OlaMapsGl.Marker;
    type Popup = OlaMapsGl.Popup;
    type NavigationControl = OlaMapsGl.NavigationControl;
    type GeolocateControl = OlaMapsGl.GeolocateControl;
    type ScaleControl = OlaMapsGl.ScaleControl;
    type FullscreenControl = OlaMapsGl.FullscreenControl;
    type AttributionControl = OlaMapsGl.AttributionControl;
    type TerrainControl = OlaMapsGl.TerrainControl;
    type Map = OlaMapsGl.Map;
    type MapOptions = OlaMapsGl.MapOptions;
    type MarkerOptions = OlaMapsGl.MarkerOptions;
    type PopupOptions = OlaMapsGl.PopupOptions;
    type NavigationControlOptions = OlaMapsGl.NavigationControlOptions;
    type GeolocateControlOptions = OlaMapsGl.GeolocateControlOptions;
    type ScaleControlOptions = OlaMapsGl.ScaleControlOptions;
    type FullscreenControlOptions = OlaMapsGl.FullscreenControlOptions;
    type AttributionControlOptions = OlaMapsGl.AttributionControlOptions;
    type StyleSpecification = OlaMapsGl.StyleSpecification;
    type LayerSpecification = OlaMapsGl.LayerSpecification;
    type SourceSpecification = OlaMapsGl.SourceSpecification;
    type StyleOptions = OlaMapsGl.StyleOptions;
    type StyleSetterOptions = OlaMapsGl.StyleSetterOptions;
    type AddLayerObject = OlaMapsGl.AddLayerObject;
    type GeoJSONSource = OlaMapsGl.GeoJSONSource;
    type GeoJSONSourceOptions = OlaMapsGl.GeoJSONSourceOptions;
    type GeoJSONSourceDiff = OlaMapsGl.GeoJSONSourceDiff;
    type GeoJSONFeatureId = OlaMapsGl.GeoJSONFeatureId;
    type VectorTileSource = OlaMapsGl.VectorTileSource;
    type RasterTileSource = OlaMapsGl.RasterTileSource;
    type ImageSource = OlaMapsGl.ImageSource;
    type CanvasSource = OlaMapsGl.CanvasSource;
    type VideoSource = OlaMapsGl.VideoSource;
    type LngLat = OlaMapsGl.LngLat;
    type LngLatLike = OlaMapsGl.LngLatLike;
    type LngLatBounds = OlaMapsGl.LngLatBounds;
    type Point = OlaMapsGl.Point;
    type MercatorCoordinate = OlaMapsGl.MercatorCoordinate;
    type Coordinates = OlaMapsGl.Coordinates;
    type Feature = OlaMapsGl.Feature;
    type MapGeoJSONFeature = OlaMapsGl.MapGeoJSONFeature;
    type GeoJSONFeature = OlaMapsGl.GeoJSONFeature;
    type FeatureStates = OlaMapsGl.FeatureStates;
    type FeatureIdentifier = OlaMapsGl.FeatureIdentifier;
    type GeoJSON = GeoJSON.GeoJSON;
    type Geometry = GeoJSON.Geometry;
    type GeometryCollection = GeoJSON.GeometryCollection;
    type GeoJSONPoint = GeoJSON.Point;
    type MultiPoint = GeoJSON.MultiPoint;
    type LineString = GeoJSON.LineString;
    type MultiLineString = GeoJSON.MultiLineString;
    type Polygon = GeoJSON.Polygon;
    type MultiPolygon = GeoJSON.MultiPolygon;
    type FeatureCollection = GeoJSON.FeatureCollection;
    type GeoJsonProperties = GeoJSON.GeoJsonProperties;
    type Position = GeoJSON.Position;
    type BBox = GeoJSON.BBox;
    type QueryRenderedFeaturesOptions = OlaMapsGl.QueryRenderedFeaturesOptions;
    type QuerySourceFeatureOptions = OlaMapsGl.QuerySourceFeatureOptions;
    type QueryRenderedFeaturesResults = OlaMapsGl.QueryRenderedFeaturesResults;
    type MapMouseEvent = OlaMapsGl.MapMouseEvent;
    type MapTouchEvent = OlaMapsGl.MapTouchEvent;
    type MapWheelEvent = OlaMapsGl.MapWheelEvent;
    type MapLayerMouseEvent = OlaMapsGl.MapLayerMouseEvent;
    type MapLayerTouchEvent = OlaMapsGl.MapLayerTouchEvent;
    type MapDataEvent = OlaMapsGl.MapDataEvent;
    type MapSourceDataEvent = OlaMapsGl.MapSourceDataEvent;
    type MapStyleDataEvent = OlaMapsGl.MapStyleDataEvent;
    type MapTerrainEvent = OlaMapsGl.MapTerrainEvent;
    type MapProjectionEvent = OlaMapsGl.MapProjectionEvent;
    type OlaMapsEvent = OlaMapsGl.MapLibreEvent;
    type OlaMapsZoomEvent = OlaMapsGl.MapLibreZoomEvent;
    type MapEventType = OlaMapsGl.MapEventType;
    type AJAXError = OlaMapsGl.AJAXError;
    type ErrorLike = OlaMapsGl.ErrorLike;
    type IControl = OlaMapsGl.IControl;
    type CustomLayerInterface = OlaMapsGl.CustomLayerInterface;
    type RequestParameters = OlaMapsGl.RequestParameters;
    type GetResourceResponse<T> = OlaMapsGl.GetResourceResponse<T>;
    type AddProtocolAction = OlaMapsGl.AddProtocolAction;
    type RequestTransformFunction = OlaMapsGl.RequestTransformFunction;
    type TileState = OlaMapsGl.TileState;
}
