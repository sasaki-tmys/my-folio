import * as BABYLON from '@babylonjs/core'

export async function loadModels(
    scene: BABYLON.Scene,
    floor: number,
    models: { stairMesh?: BABYLON.AbstractMesh; elevatorMesh?: BABYLON.AbstractMesh }
): Promise<void> {
    const yOffset = 0

    if (floor < 5) {
        try {
            const stairs = await BABYLON.SceneLoader.ImportMeshAsync('', '/models/', 'stairs.glb', scene)
            models.stairMesh = stairs.meshes[0]
            models.stairMesh.position = new BABYLON.Vector3(-2.34, yOffset, 6.25)
            models.stairMesh.rotation = new BABYLON.Vector3(0, 0, 0)
            models.stairMesh.scaling = new BABYLON.Vector3(2, 1.5, 2)
            console.log(`${floor}F階段モデルの読み込みに成功しました！`)

        } catch (error: any) {
            console.log(`${floor}F階段モデルの読み込みに失敗しました！`)
        }
    }

    try {
        const elevter = await BABYLON.SceneLoader.ImportMeshAsync('', '/models/', 'elevter.glb', scene)
        models.elevatorMesh = elevter.meshes[0]
        models.elevatorMesh.position = new BABYLON.Vector3(-4.9, yOffset, -5)
        models.elevatorMesh.rotation = new BABYLON.Vector3(0, 0, 0)
        models.elevatorMesh.scaling = new BABYLON.Vector3(2, 1.5, 1.5)
        console.log(`${floor}Fエレベーターモデルの読み込みに成功しました！`)
    } catch (error: any) {
        console.log(`${floor}Fエレベーターモデルの読み込みに失敗しました！`)
    }

    switch (floor) {
        case 1:
            BABYLON.SceneLoader.ImportMesh('', '/models/', 'girl01.glb', scene, (meshes) => {
                const girlMesh = meshes[0]
                girlMesh.position = new BABYLON.Vector3(-3, yOffset, 5)
                girlMesh.rotation = new BABYLON.Vector3(0, 1, 0)
                girlMesh.scaling = new BABYLON.Vector3(2, 2, 2)
                console.log('1Fキャラクターモデルの読み込みに成功しました！')
            })
            break
        case 2:
            BABYLON.SceneLoader.ImportMesh('', '/models/cure/', 'cure.pmx', scene, (meshes) => {
                meshes.forEach((mesh) => {
                    mesh.position = new BABYLON.Vector3(-0.5, 0, 3.5)
                    mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4)
                })
            })
            break
        case 3:
            BABYLON.SceneLoader.ImportMesh('', '/models/dhiona/', 'dhiona.pmx', scene, (meshes) => {
                meshes.forEach((mesh) => {
                    mesh.position = new BABYLON.Vector3(-0.5, 0, 3.5)
                    mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4)
                })
            })
            break
        case 4:
            BABYLON.SceneLoader.ImportMesh('', '/models/nana/', 'nana.pmx', scene, (meshes) => {
                meshes.forEach((mesh) => {
                    mesh.position = new BABYLON.Vector3(-0.5, 0, 3.5)
                    mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4)
                })
            })
            break
        case 5:
            BABYLON.SceneLoader.ImportMesh('', '/models/yoyo/', 'yoyo.pmx', scene, (meshes) => {
                meshes.forEach((mesh) => {
                    mesh.position = new BABYLON.Vector3(-0.5, 0, 3.5)
                    mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4)
                })
            })
            break
    }
}
