namespace SpriteKind {
    export const BG = SpriteKind.create()
    export const Money = SpriteKind.create()
    export const Effects = SpriteKind.create()
    export const Trail = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const Groundpound = SpriteKind.create()
    export const Dashing = SpriteKind.create()
    export const Money2 = SpriteKind.create()
}
function RunningAnim2 () {
    if (Speedforrunning1 == 40) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 9 e f f . . 
            . . f e d d f 1 4 d 6 e e f . . 
            . . . f d 9 d d 4 e e e f . . . 
            . . . f e 6 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 9 e f f . . 
            . . f e d d f 1 4 d 6 e e f . . 
            . . . f d 9 d 4 4 e e e f . . . 
            . . . f e 6 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 9 e f f . . 
            . . f e d d f 1 4 d 6 e e f . . 
            . . . f d 9 d d 4 e e e f . . . 
            . . . f e 6 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 9 e f f . . 
            . . f e d d f 1 4 d 6 e e f . . 
            . . . f d 9 d d 4 4 4 e f . . . 
            . . . f e 6 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e 9 4 f d d d d f 4 e e f . 
            . . f 6 e d d d d d d 9 e f . . 
            . . . f e e 4 4 4 4 e 6 f . . . 
            . . e 4 f 2 9 2 2 2 2 f 4 e . . 
            . . 4 d f 2 6 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e 9 4 f d d d d f 4 e e f . 
            . . f 6 e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e 9 f . . . 
            . . e 4 f 2 2 2 2 2 2 6 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 9 5 5 4 4 f 4 4 . . 
            . . . . . f 6 f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f 9 e d d d d d d e e f . . 
            . . . 6 e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 9 4 e . . 
            . . 4 d f 2 2 2 2 2 2 6 d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f 9 . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 9 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 6 f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 9 4 4 . . 
            . . . . . f f f f f f 6 . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 9 f 4 4 5 5 4 4 f 4 4 . . 
            . . . 6 . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        75,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e b f 4 4 e e f . 
            . . f e e 6 d 4 1 f d d e f . . 
            . . . f e e e 4 d d 9 d f . . . 
            . . . . f f 4 4 4 4 6 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e b f 4 4 e e f . 
            . . f e e 6 d 4 1 f d d e f . . 
            . . . f e e e 4 4 d 9 d f . . . 
            . . . . . f 4 d d 4 6 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e b f 4 4 e e f . 
            . . f e e 6 d 4 1 f d d e f . . 
            . . . f e e e 4 d d 9 d f . . . 
            . . . . f f 4 4 4 4 6 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e b f 4 4 e e f . 
            . . f e e 6 d 4 1 f d d e f . . 
            . . . f e 4 4 4 d d 9 d f . . . 
            . . . . 4 d d 4 4 4 6 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        160,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
}
sprites.onCreated(SpriteKind.Trail, function (sprite) {
    timer.background(function () {
        timer.after(75, function () {
            timer.after(1, function () {
                timer.after(1, function () {
                    timer.after(1, function () {
                        timer.after(1, function () {
                            timer.after(1, function () {
                                timer.after(1, function () {
                                    sprites.destroy(sprite)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
function LevelCreate () {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    for (let value4 of tiles.getTilesByType(assets.tile`myTile4`)) {
        MoneyCollectibles = [
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . f f 1 1 f f . . . . . 
            . . . . . f 1 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 4 f . . . . 
            . . . . f 5 5 5 5 5 4 f . . . . 
            . . . . . f 5 5 5 4 f . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 f f 5 f . . . . . 
            . . . . f 5 f . . f 5 f . . . . 
            . . . . f 5 f . . f 5 f . . . . 
            . . . . . f 5 f f 5 f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f f f . . 
            . . f f f f f f 7 7 7 7 7 f . . 
            . . f 7 7 7 7 f f 7 7 f 7 f . . 
            . . f 7 f 7 f 1 1 f 7 f 7 f . . 
            . . f 7 f 7 f 1 1 f 7 f 7 f . . 
            . . f 7 f 7 7 f f 7 7 7 7 f . . 
            . . f 7 7 7 7 7 f f f f f f . . 
            . . f f f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . f . f 1 f . . . . . . 
            . . . . f 1 f . f f f . . . . . 
            . . . . f f . . . . . f . . . . 
            . . . f f . . . . . f 1 f . . . 
            . . f 1 f . . . . . . f f . . . 
            . . . f . . . . . . . f 1 f . . 
            . . . . f . . . . . . f f . . . 
            . . . . f f . . . . f f . . . . 
            . . . . f 1 f f . f 1 f . . . . 
            . . . . . f f 1 f . f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money)
        ]
        tiles.placeOnTile(MoneyCollectibles._pickRandom(), value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile18`)) {
        MoneyCollectibles = [sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . f f 1 1 f . . . 
            . . . . . f f f 5 5 5 1 f . . . 
            . . . f f 5 5 5 5 5 5 5 4 f . . 
            . . f 4 5 5 5 5 5 5 5 5 4 f . . 
            . . f 4 5 5 5 5 5 4 4 4 f f . . 
            . . f 4 5 4 4 4 4 f f f . . . . 
            . . f 4 4 f f f f . . . . . . . 
            . . f f f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money2)]
        tiles.placeOnTile(MoneyCollectibles._pickRandom(), value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) && mySprite.vy == 0) {
        mySprite.vy = -225
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("dashing", 300, function () {
        mySprite.setKind(SpriteKind.Dashing)
        if (LookingLeft) {
            characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f 2 f e e e e f f . . . 
                . . . f 2 2 2 f e e e e f f . . 
                . . . f e e e e f f e e e f . . 
                . . f e 2 2 2 2 e e f f f f . . 
                . . f 2 e f f f f 2 2 2 e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . . f e d d f 1 4 d 4 e e f . 
                . . . . f d d d 4 4 e e e f . . 
                . . . . f e 4 4 d d 4 f . . . . 
                . . . . f 2 2 4 d d 4 f . . . . 
                . . . f f 5 5 f 4 4 f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . f f f . . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f 2 f e e e e f f . . . 
                . . . f 2 2 2 f e e e e f f . . 
                . . . f e e e e f f e e e f . . 
                . . f e 2 2 2 2 e e f f f f . . 
                . . f 2 e f f f f 2 2 2 e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . f f e d d f 1 4 d 4 e e f . 
                . f d d f d d d d 4 e e e f . . 
                . f b b f 4 4 e 4 e e f . . . . 
                . f b b 4 d d 4 2 2 2 f . . . . 
                . . f b 4 d d 4 4 4 4 f f . . . 
                . . . f f 4 4 f f f f f f . . . 
                . . . . f f f . . . f f . . . . 
                `],
            50,
            false
            )
            for (let index = 0; index < 50; index++) {
                mySprite.x += -0.8
                pause(8)
            }
        } else if (!(LookingLeft)) {
            characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f 2 f . . . . 
                . . f f e e e e f 2 2 2 f . . . 
                . . f e e e f f e e e e f . . . 
                . . f f f f e e 2 2 2 2 e f . . 
                . . f e 2 2 2 f f f f e 2 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f . . . 
                . . f e e e 4 4 d d d f . . . . 
                . . . . f 4 d d 4 4 e f . . . . 
                . . . . f 4 d d 4 2 2 f . . . . 
                . . . f f f 4 4 f 5 5 f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . f f . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f 2 f . . . . 
                . . f f e e e e f 2 2 2 f . . . 
                . . f e e e f f e e e e f . . . 
                . . f f f f e e 2 2 2 2 e f . . 
                . . f e 2 2 2 f f f f e 2 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f f . . 
                . . f e e e 4 d d d d f d d f . 
                . . . . f e e 4 e 4 4 f b b f . 
                . . . . f 2 2 2 4 d d 4 b b f . 
                . . . f f 4 4 4 4 d d 4 b f . . 
                . . . f f f f f f 4 4 f f . . . 
                . . . . f f . . . f f f . . . . 
                `],
            50,
            false
            )
            for (let index = 0; index < 50; index++) {
                mySprite.x += 0.8
                pause(8)
            }
        }
        characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
        mySprite.setKind(SpriteKind.Player)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    Collected_Money += 10
})
function PlayerCreate () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    mySprite.z = 1
    mySprite.ay = 500
    mySprite.setVelocity(0, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money2, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    Collected_Money += 100
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (!(TouchedTreasure)) {
        mySprite.setVelocity(0, 0)
    }
    tiles.setTileAt(location, assets.tile`myTile1`)
    characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
    Trophy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 5 5 5 5 4 f . . . 
        . . . f 1 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 5 5 5 5 5 4 f f . . 
        . f . f 5 5 5 5 5 5 5 4 f . f . 
        . f . . f 5 5 5 5 5 4 f . . f . 
        . f . . f 5 5 5 5 5 4 f . . f . 
        . f f . . f 5 5 5 4 f . . f f . 
        . . f f f f 5 5 5 4 f f f f . . 
        . . . . . f f 5 4 f f . . . . . 
        . . . . . . f 5 4 f . . . . . . 
        . . . . . . f 5 4 f . . . . . . 
        . . . . . . f 4 4 f . . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Trophy, location)
    for (let index = 0; index < 17; index++) {
        Trophy.y += -1
    }
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f f e e f f f f f . . 
        . f f e f 1 f 4 4 f 1 f e f f . 
        . f e 4 4 d d d d d d 4 4 e f . 
        . . 4 d d 4 d d d d 4 d d 4 . . 
        . . 4 d d 4 4 4 4 4 4 d d 4 . . 
        . . . 4 4 2 2 2 2 2 2 4 4 . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 4 4 5 5 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f 4 4 f e e e e f 4 4 f . . 
        . f 4 d d 4 f 4 4 f 4 d d 4 f . 
        . f 4 d d 4 d d d d 4 d d 4 f . 
        . . f 4 4 d d d d d d 4 4 f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 4 4 5 5 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f 4 4 e e e e e e 4 4 f . . 
        . . 4 d d 4 2 2 2 2 4 d d 4 . . 
        . . 4 d d 4 f f f f 4 d d 4 . . 
        . . f 4 4 f f e e f f 4 4 f . . 
        . f f e f 1 f 4 4 f 1 f e f f . 
        . f e e 4 d d d d d d 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 4 4 5 5 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    50,
    false
    )
    timer.after(1250, function () {
        scene.cameraShake(2, forever2)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . 4 d 4 f 2 2 2 2 2 2 f 4 d 4 . 
            . 4 4 . f 4 4 5 5 4 4 f . 4 4 . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        50,
        false
        )
        timer.after(1250, function () {
            characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
            TouchedTreasure = true
            for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
                tiles.setTileAt(value, assets.tile`myTile3`)
            }
            for (let value2 of tiles.getTilesByType(assets.tile`myTile13`)) {
                tiles.setTileAt(value2, assets.tile`myTile14`)
                tiles.setWallAt(value2, false)
            }
            timer.after(3, function () {
                for (let value3 of tiles.getTilesByType(assets.tile`myTile8`)) {
                    tiles.setTileAt(value3, assets.tile`myTile13`)
                    tiles.setWallAt(value3, true)
                }
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Money, SpriteKind.Money, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
scene.onHitWall(SpriteKind.Money, function (sprite, location) {
	
})
function RunningTrail () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Trail)
    mySprite2.setPosition(mySprite.x, mySprite.y)
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    RunningTrail()
})
function HUDCreate () {
    AlarmBgBlinking = sprites.create(img`
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, SpriteKind.BG)
    AlarmBgBlinking.z = -50
    AlarmBgBlinking.setPosition(80, 60)
    AlarmBgBlinking.setFlag(SpriteFlag.Invisible, true)
    AlarmBgBlinking.setFlag(SpriteFlag.RelativeToCamera, true)
    TimeAlarm = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . f f f f 2 2 f f . . . . 
        . . . f f 2 2 2 2 2 2 f f . . . 
        . . f f 2 2 2 2 2 2 2 2 f . . . 
        . . f 2 2 2 2 2 2 2 2 2 f f f f 
        . f f 2 2 2 2 2 2 2 f f b b b f 
        . f 2 2 2 2 2 2 f f f b b b b f 
        . f f 2 2 2 2 f f b b b b b f f 
        . . f 2 2 f f f b b b b b f f . 
        . . f 2 f f b b b b b b f f . . 
        . . f f f b b b b b f f . . . . 
        . f f b b b b b f f f . . . . . 
        . f b b b f f f f . . . . . . . 
        . f f f f f . . . . . . . . . . 
        `, SpriteKind.HUD)
    TimeAlarm.z = 0
    TimeAlarm.setPosition(58, 10)
    TimeAlarm.setFlag(SpriteFlag.Invisible, true)
    TimeAlarm.setFlag(SpriteFlag.RelativeToCamera, true)
    TimeVar = textsprite.create("")
    TimeVar.z = 0
    TimeVar.setPosition(70, 10)
    TimeVar.setFlag(SpriteFlag.Invisible, true)
    TimeVar.setFlag(SpriteFlag.RelativeToCamera, true)
    TimeVar.setOutline(1, 15)
    MoneyVarHUD = textsprite.create("0")
    MoneyVarHUD.setPosition(12, 105)
    MoneyVarHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    MoneyVarHUD.z = 6
    MoneyVarHUD.setOutline(1, 15)
    MoneyHUD = sprites.create(img`
        ...........ffffffff.............
        ..........ffccccccff............
        .........ffcccccfff.............
        .........fccccffff..............
        .........fffffeeef..............
        ..........feeeeffff.............
        ..........ffeff555f.............
        ...........ff55ffff.............
        ...........f5ffeeeff............
        ............feeeeeefff..........
        ............feeeeeeeefff........
        ...........ffeeeeeeeeeefff......
        .........ffeeeeeeeeeeeeeefff....
        ......ffffeeeeeeeeeeeeeeeeeff...
        .....ffeeeeeeeeeeeeeeeeeeeeef...
        ....feeeeeeeeeeeeeeeeeeeeeeeff..
        ...feeeeeeeeeeeeeeeeeeeeeeeeeff.
        ..ffeeeeeeeeeeeeeeeeeeeeeeeeeef.
        .ffeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        .feeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        .feeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        .feeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        .feeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        .feeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        .feeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        .ffeeeeeeeeeeeeeeeeeeeeeeeeeeff.
        .ffeeeeeeeeeeeeeeeeeeeeeeeeeff..
        ..feeeeeeeeeeeeeeeeeeeeeeeeff...
        ..ffeeeeeeeeeeeeeeeeeeeeeeff....
        ..ffeeeeeeeeeeeeeeeeeeeeff......
        ...fffeeeeeeeeeeeeeeeffff.......
        .....fffffffffffffffff..........
        `, SpriteKind.HUD)
    MoneyHUD.setPosition(20, 100)
    MoneyHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    MoneyHUD.z = 5
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
function RunningAnim () {
    if (Speedforrunning1 == 40) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d 4 4 e e e f . . . 
            . . . f e 4 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 4 4 e f . . . 
            . . . f e 4 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 4 d d d f . . . 
            . . . . . f 4 d d 4 4 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e 4 4 4 d d d d f . . . 
            . . . . 4 d d 4 4 4 4 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d 4 4 e e e f . . . 
            . . . f e 4 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 4 4 e f . . . 
            . . . f e 4 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 4 d d d f . . . 
            . . . . . f 4 d d 4 4 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e 4 4 4 d d d d f . . . 
            . . . . 4 d d 4 4 4 4 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
}
function Variables () {
    Collected_Money = 0
    TouchedTreasure = false
    Seconds = 46
    Minutes = 0
    Level = 0
}
let Level = 0
let Minutes = 0
let Seconds = 0
let MoneyHUD: Sprite = null
let MoneyVarHUD: TextSprite = null
let TimeVar: TextSprite = null
let TimeAlarm: Sprite = null
let AlarmBgBlinking: Sprite = null
let mySprite2: Sprite = null
let Trophy: Sprite = null
let TouchedTreasure = false
let Collected_Money = 0
let Disappear: Sprite = null
let LookingLeft = false
let MoneyCollectibles: Sprite[] = []
let mySprite: Sprite = null
let Speedforrunning1 = 0
let forever2 = 0
let Gameplay = 0
forever2 = 1000000000
Variables()
PlayerCreate()
HUDCreate()
LevelCreate()
game.onUpdate(function () {
    if (controller.down.isPressed()) {
        if (mySprite.vy != 0) {
            characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
            mySprite.vy = 300
            RunningTrail()
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . f f . . f f . . . . . 
                . . 4 4 . f f f f f f . 4 4 . . 
                . . 4 d f 4 4 5 5 4 4 f d 4 . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . . 4 f 2 2 2 2 2 2 f 4 . . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . f e e d d d d d d e e f . . 
                . f e e 4 d d d d d d 4 e e f . 
                . f f e f 1 f 4 4 f 1 f e f f . 
                . . f f f f e e e e f f f f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f e e 2 2 2 2 2 2 e e f . . 
                . . f f f e e e e e e f f f . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . . . . f f f f . . . . . . 
                `],
            500,
            false
            )
            mySprite.setKind(SpriteKind.Groundpound)
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (mySprite.kind() == SpriteKind.Groundpound) {
            mySprite.setKind(SpriteKind.Player)
            characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile11`)) {
        if (mySprite.kind() == SpriteKind.Groundpound) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), false)
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile12`)) {
        if (mySprite.kind() == SpriteKind.Dashing) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency16`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
        }
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile12`)) {
        if (mySprite.kind() == SpriteKind.Dashing) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
        }
    }
})
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        if (mySprite.vx != 0) {
            if (Speedforrunning1 != 40) {
                Speedforrunning1 += 1
            } else {
                Speedforrunning1 = 40
            }
        } else {
            Speedforrunning1 = 0
        }
    } else {
        Speedforrunning1 = 0
    }
})
game.onUpdate(function () {
    MoneyVarHUD.setText(convertToText("" + Collected_Money + "$"))
    TimeVar.setText(convertToText("" + Minutes + ":" + Seconds))
    if (TouchedTreasure) {
        timer.throttle("ticking timer", 1000, function () {
            Seconds += -1
        })
        timer.throttle("blinkingBG", 2000, function () {
            AlarmBgBlinking.setFlag(SpriteFlag.Invisible, false)
            timer.after(1000, function () {
                AlarmBgBlinking.setFlag(SpriteFlag.Invisible, true)
            })
        })
        TimeVar.setFlag(SpriteFlag.Invisible, false)
        TimeAlarm.setFlag(SpriteFlag.Invisible, false)
    } else {
        TimeVar.setFlag(SpriteFlag.Invisible, true)
        TimeAlarm.setFlag(SpriteFlag.Invisible, true)
    }
    if (Seconds == -1) {
        Seconds = 59
        Minutes += -1
    }
    if (Minutes == 0 && Seconds == 0) {
        game.gameOver(false)
    }
})
game.onUpdate(function () {
    if (TouchedTreasure) {
        RunningAnim2()
    } else {
        RunningAnim()
    }
    if (controller.left.isPressed()) {
        LookingLeft = true
        if (Speedforrunning1 == 40 && controller.A.isPressed()) {
            mySprite.vx = -180
        } else {
            mySprite.vx = -75
        }
    } else if (controller.right.isPressed()) {
        LookingLeft = false
        if (Speedforrunning1 == 40 && controller.A.isPressed()) {
            mySprite.vx = 180
        } else {
            mySprite.vx = 75
        }
    } else {
        if (!(controller.B.isPressed())) {
            mySprite.vx = 0
        }
        Speedforrunning1 = 0
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
        mySprite.setVelocity(0, 0)
        if (TouchedTreasure) {
            TouchedTreasure = false
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
            timer.after(1100, function () {
                game.gameOver(true)
            })
        }
    }
})
