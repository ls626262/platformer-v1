gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDPlayer1Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayer1Objects2= [];
gdjs.Untitled_32sceneCode.GDGroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGroundObjects2= [];
gdjs.Untitled_32sceneCode.GDLightObjects1= [];
gdjs.Untitled_32sceneCode.GDLightObjects2= [];
gdjs.Untitled_32sceneCode.GDKillbrikcObjects1= [];
gdjs.Untitled_32sceneCode.GDKillbrikcObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.Untitled_32sceneCode.GDPlayer1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKillbrikcObjects1Objects = Hashtable.newFrom({"Killbrikc": gdjs.Untitled_32sceneCode.GDKillbrikcObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Untitled_32sceneCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayer1Objects1[k] = gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Killbrikc"), gdjs.Untitled_32sceneCode.GDKillbrikcObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Untitled_32sceneCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer1Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKillbrikcObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].setPosition(58,972);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Untitled_32sceneCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].getBehavior("IdleTracker").IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayer1Objects1[k] = gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDKillbrikcObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDKillbrikcObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDKillbrikcObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDKillbrikcObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
