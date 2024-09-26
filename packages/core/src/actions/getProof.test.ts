import { chain, config } from '@uxuyalpha/test'
import { expect, test } from 'vitest'

import { getProof } from './getProof.js'

test('default', async () => {
  await expect(
    getProof(config, {
      chainId: chain.optimism.id,
      address: '0x4200000000000000000000000000000000000016',
      blockNumber: 114571816n,
      storageKeys: [
        '0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
      ],
    }),
  ).resolves.toMatchInlineSnapshot(`
    {
      "accountProof": [
        "0xf90211a0aec097ff0b163846d6e5b768e46967582314d1caffabf2c16e9a423f7fcb8d3da05ad1d8f6f710b2c2dda3e725aa42a302157f83ffc7c69b9621bbb5bfefe62b17a0cb0037627302e2dc2075045ec10faafde69a80a1edf5d1ef78d224f3ed6994f0a09c5c44b45038b3ddcfe5628a649540688c8b31b689fc5ec2b14c917a093d1d85a04216666d8676bdf0e63fb908af9c4cfb080124f3e6afc8da715b574b93efd279a01eef3f90a8f9d0b90c22d42701b448b06d436c11f6305706c11f2253bd94f4eea0c257cfb0dced08d41e93741c225f65789bc54c02a7c3241cf9fd8fbc9142d1d0a045be5b8d25c71cbe5dacf30948475f4221fa43a0e45ebec27767ef0ec293af31a0f9cde1e9de76de09301165ad415109c98cd5268465b028155b5f2f2ee77af69aa01e01dbb3a67d2abc4d70cc4c384227f75e158df95181d21eea773942150dfa44a0a3d2a0647e6fa349417e8444aaa7eda7b1d444e8b8712891e87e7341ebd194d2a0800eba98063f7443733ca61c6f355b5175963fb36472aa15b3af9a653c5b457da0da5e2077053eedeb2ef8a9a9fa9e6ce3d5c063dc24b0f316eeef107f4e2114c9a036d924530d45f263afa48d5298bc568db875800b5272aedd0426a395b3fcd230a0b8bdc3049c6c862dec595a8c7a594e3593a42654826326593f411788b39d1212a0d819ac3bd17dba51e5a1493c91b5025c8bc661e00f6f002844180df4a43a4c8480",
        "0xf90211a0b805b7a7bbc7029720574299f3b97236cd6f0bbb0b8ac2cfbf62718902a1432ea02b9862a6d568ae0f13edd27d4a1750e2a5b02679bdf8e5a8814db29ccfe39d3fa0a4bc082ad30d148b1a0797ad5c9f2d88f9a54f11e32974ae6eff3f4dec3566fba01b6e2891a8b73b7881c9b54d6ec3daf58128b4c47f72d051539676242d811e98a0d18f27e0419e2307f68c42be3b79f055a8a3db124d9c7e92cb25393cd1653784a0ff41d00710630c688c6ed133fa9df498890f1c240b0152b4dea8a57265c1ea2fa0aa4fdca61bd19df46a6e331e987084ebbc42abea26f1eeb64c4ca8dff065cbf4a0e620bae2104b1d201921ce06deb45a15c3af1b68d418957377dae72c67e6f585a0abf8366c18ef551f7c7cb8d7b4595e2e0ac661731fde452ed7f7f621a1f7bf63a0cb5b92eea1df1154704aca1ba670cf1feaebbc7e87d68113b026d28547bfcaa1a012a0dac634c209e866fb8ce640b1475a479369f38083e22314ec189962874d62a04c32234d31e689a4cd6b232ade9516f0117397bd5649d8034eba104d64ae003ca0a984a935c5414a1f6365a15f7a622d2f4c884ef738dd1813cf61606a171b7b45a01045ee2ba29a053e1d758e51ba75cad09feb3f6eaadf4f963354c814da9fe9b2a09b14eb84c54058ae92686987895b655a86275a50f83ef7fa3bc49d2aba77e11fa040486c01b404d6913fabd5a8b4d317efe4b71027c9d0df7b4a573027a5f9655b80",
        "0xf90211a075d7b5a418239d733522dda7e064025f1239c404d71cefc80617597367b69e6ea00446f917d2cb1f173006a194b8008ffc6fabe80ed56d95bbe06aafe607a8371aa051f66d63226e926a653793951ca7d4a72f6888179132acae9e216cde54685e2da09a308e2c241396a17dfeaab1212f792a687a06abbc9fa22b8e83eccdc7c29349a01097a598bd8f93802bea714ddcdda520377a39d591463f6f5c6a2e545a2dc494a0ea7dff5fd2f496b6d4aa717e3dc57285c84d4410a5eb32962c8bccb537bd1836a0c65e0d0aa6425511926b3d716f06e7f552997c42a147038b0551830d1e7e473ba052cfbed72b35f842e97bc0371eb3e0de000bc2f97dc7c992fd8493ac5f64e341a02e055c597f0bd91a8884a280c2137657bfa518fa203b1daaf1215d61737e9f4aa09d4f4ab8eed159ff1dc4ccd532c78196108283ef2d2c93069e1dc7724fb2d826a024ef34e3fdea9f1a90ce8dedcb0a8449faa76517cc1c8b8ed7dfaee3bd32f81ca08ccafb12a0d8747e5a3a1d199539d6ca3b21e692ba7dd01c56528628e1ef3bc4a0f0dfb135f051e51faa4df4216dd7515463ddf35875285765fd9fc3604a03ea62a0509cf646a93abb590385cc9893f2b98de9458212ae7926c2a7138e36721e4763a0026d889911b1358c5db61a7341efc4766ec5d150c4c4ef1a3c7f9c8091c686a5a0cf93e413246488f8a42fc036f10763229d00ddcdef75b8f9ed2036dcd948ad5d80",
        "0xf90211a03834b437dc1465b508a85ccd269ad873c69a7ed6796b665dae14dc207d432323a0402b7af438fa32fa1f59f335a350962f2f318e795c8899cd513541cad586c2cfa0fd381a630c104c79bbefe8a6a8f15f11d1573e73e3ec5ff3a7f52f97711b7d55a06c5952b899892f03161904217ea153321cc1d393c6164bfe89cc1a6e429b601ea07b795feeedc38eb14388bd79792d88b37fcd90a4d7a6a84fa1b8ad554f96075ba058a823957e1d2d33fe10d74becb6148829601029b0910280e7c4994482888f7ca00ab9f9c93fd408830dd344e81656433c4b2968b381c3a9af383f2b29a330a7d5a0be904c1f06d73f530927ac333dba9e57f14bb1bca7872fb73bad8815e94bf2b5a067f1dedae32d194f030fadc371cc0c8aa1d334e221752de96d7a3542b53db6bea084f036e3e5a267397c395627bde374b9cdf64a4b6c127d639787e3f2e0131f37a0578085fa54172c1e67b83a3bba32deeaf0b0a0a6aac6f2d7d4fd30527f89b324a097a2d41543cf7a6c3ad57ef560da5d3b9b2956297410bad25b5709f3e3e93a23a0bc42dc3a63bc7c914e8cfc58eb5b50f13932d28aff5b9e0cb41cf3bea42ca6afa0e7066d76bbfc5ced56def91150490892b62a08191bd19f59a2dd83fc28057067a0a9ceec139e1630098932aea819fb07d4de7af01be02f9663785ed5f755ab18fea0ea7d4e5c6c2577d4b660d7f592759a9a1e6f98602603018ecb1fcb4a50326cb880",
        "0xf90211a03729ba493659e3703943576362e6452dba2df3e214c679d9d8f48f94dd84e9b4a035f68c6818ba438b6211158eba8c7992693d1a1b2c6189733873fb56a2840bc7a0d1431170f049e8fec428211a3c78963c9fa730cd8f97fa2ca62217f6a862cbfea037f7add832ba16a341ab2d3aa2deb1877e45f6815db97360441d02b5e3836859a0648a97f53652f28c2a032d171df0df9c8e000e56512949548212b30544be66d4a0bdb751793ec40618c0bbb7fb6488e70eda743e1fcfc31cc1bb4aea9f965c8b35a0f0a867a5c5b1d3fd7968ee809ee676f9582242d91299ecd2ea5150e1d6caa361a0110db586878cbee5c7db8a8fdbdda189c16cad7cc424aa9c9db7b2a2a2a96e97a0e2628f4e74eddbdf55e4670ed9360fe5600559d29c885048b5a58862de55c88aa03f315f378d19b1fca09434123d5e88d7aa242eabd7544a66034ae5cfacb90634a0b35ae967d8100626510ef78b70dad84a55d5699e97890230ca33dee057105e54a05aab0c8a7218d46a45b13134b523927937a336929e73a87bbd3bb8dad8b4650ba0bfb907aa47cac9243aea8e34cb539686157ed5603467d284f28ad3b1215c54a0a029b3627c90d0678ddb46f0fbe658be1ef97cbe948a14d16e209e34affc437a45a032c71ce3c49db9466dc877aeecf5e6e0708276a671028b561c5943b08d970939a0db4e356ee957b09ccd1db62833111a7b0c7dc0f8db31e770ccb0b9cce815a65980",
        "0xf90211a00199ebec052ed22ec0f7f3baadbf4559fc63f7b6ed4afceb12e77f4cd107f552a0b1260838ef4a96865c4105de409b570c9c7e1f232aa0528d47170826608b39bfa0ab3b6b9417f136f7b858500120393d56db48462b5f73575b828270007474c3c8a0adaaea49c8f4466508fdfe29c973dad5c6592e7ff40bd02936ee03e7f38878afa047b275e895b55bb486b443d58a78623a05a84a5404257085004213e25c0b0e37a0f855c06b679d3bf5aa56efbca1e05d78f7cca5a06631afd8b31630df69c86d7ea08c24490e9ae16703569edce216efe8c87ade650838f4c9e5113e6caf42015426a0881d7e4280f550ffbffd31824cf0e3e1b4dbd63804e51f353538005a30fc0877a0359099ca55fe012b1ddea17601858c0ce86a35d9b77e0ab174663fadd196a184a0ef822991cc9807764f76797868f5873ecf89ef9947d02476cf6b80396a51bce8a04778e1764db94bbf19e8d755984934b31f9bc064f898dd27e170867b0eac823ca09379eaf8b3c2657fb540017d486e96534126c04a055fe6f8c9114a9a38566c06a00470dc7697991a3eeeb7aed5cd5212034525c9b3528c4e8245d23b27ec771f9ba028974e7be411113dba8d00f8b958eb06e1c957f82f2225ae44d5e6e81106672ba0df616fb6078a75efb74089ddc02226b9ef55311a3f402c7860e40f77bf59a8d6a0ddd81505aafeee3d17a112a8f7d1606a6ff981c10413324c8dd739c0cd69616f80",
        "0xf8d180a0d5b2c83c7cc15a06046240474cc04a5db122c9ff8d82de8d61c524745afbf07680a014122b1b68146a56a29ee76cebed16482c59c969e6be8b7a5a6955679e781df280a0c1d58006c474a8d0d4e6daaa915d29aa1bfe9f9b2e363e791163c48c7c93615880a072b769a2cf7fe7e626fb030a21cfea696b941029e65b0faefae6531c86334e9e80a0342d2f17569764b28d61ab5102510f2d8ed939e0d72364ae01408e47a14544d280a0bde4e80a8b068e227830b7508abf475868969120bf5c55d06d0208d9619fcd728080808080",
        "0xf8709d30147f4cc0e0156d993334777d699c312c2fe454f8b3fa338ed309f4a0b850f84e048a0fb5ee5ed06fd56c7c0fa0149d15d1300498bff4bfceb56dc005e70c54241eea0a5a7058c62ec345bf505ba01f958654ab06a152993e7a0ae7b6dbb0d4b19265cc9337b8789fe1353bd9dc35",
      ],
      "address": "0x4200000000000000000000000000000000000016",
      "balance": 74191534315593685302287n,
      "codeHash": "0x1f958654ab06a152993e7a0ae7b6dbb0d4b19265cc9337b8789fe1353bd9dc35",
      "nonce": 4,
      "storageHash": "0x149d15d1300498bff4bfceb56dc005e70c54241eea0a5a7058c62ec345bf505b",
      "storageProof": [
        {
          "key": "0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99",
          "proof": [
            "0xf90211a082fc9029ea5c161f91c01fa183cef98be25957c6164c110a252e4b8b6b334b15a064cb07fb0bec48bf53bac5077716ab7bb59ebc01c608bfba0da28d44501d79a7a0a0c5ef49c5d553fa66b51f51295d5f28fba0a5555822d7012c1daebe4bb57417a0082a52cc3fbe21f63aceebc88d8a9e365888e486b90feb465f58fd0e263ab2a2a05be6b594e391fe3c73c066f7a1f10d4bac03c1a0766775cd4400a2cc025f6990a03def6b5c9833c22543c44950ada488e3bd7fb01ec696a4e476a479cdec802cfba0e10829d63ea34e89b5ceb433686378dbc11b5aefe122c7f8a28804fed8b76ca5a07313dc662f421586094f4b83d31aa743c9157dd1596b27e64f7040e2d0d90f1ea08dc1dcb08f1918a1fae1520a1f8ab33641de2c93b16495824ca50311bebf1e1aa0dd6bd1211e2fbcff725db48da6e68317a7121615065747801e3bee54e73b9b49a0b7e7dae52bb6d6fded480d0b087334603ac5dbc224da7c48882fbed98136da36a0a88d97b0bda3cbff682d9e36bfd403a976e12addddf3695d69bc7993d8d56448a0e041640af48ec21b4010a38690af8c9e65966bc3ca0aa71a7dc0775f64692aefa09e8c04289de47e1d905322ed50051cf1d8e0af98ca32f4ba32d8f0fcaa042570a0f9df510aad677a4c31c99a339faadb5bf2e6dd68fbc35e1a7cb55721f915c029a0413484ecb5adfc44f7ce43a8e35da709060709ba270be02e8089cdff7c386eb880",
            "0xf90211a07a2e200a8f16e47dcb91d71a374bca1effd36b306aa944c3329ca78d5a40d4efa074172fb34e3c981ce51c2f0d4b13efb14ac5a5a55c7047b6b568f8a358a85d66a0e39dd251e0e88ce17ad5b94e74fecc3c884fa00d5581e28357dff24aafd21c45a0f093fa90b2772ae0cb96c742af3002c01821ddece546d96c60fac37e25a131caa064fd388011e6a3db2e4e069e112abcaa261e1a5c8f330b2fdf0b6a79ac6a67fea04e7ac3ceace081892ccf722c7075ae14471f213bf6b59cc7130476653a1d04bea012f91703aed54e6853294a560305aa7cc91c9c4fdd6e3a38d7d0ded2ff885305a0af76fe6e44f3933e3d089adfccdcecc424f3b1fed6f78b4578ab637d5bc37bfaa0c55e93899edd98059ef73ccd3bf494443e3920b14cc39bdeec53dce324de9b47a097dfe8a1ab57520fba75a3d0e4f262da1c02c32ee5e3e0914f37811dc7bc2e1da021f69e5e122ca6a80706509a807abf55eb61fe3cd9494357809aef507527cf00a0b9360d3affb06287b1ea34e05e73ff8c54c9474a5bbc25a0faf7911ed68ffcb1a082692b8ddba185029f3a4b7a6e1603522fa1681ec6e5d57898acc88f2a97cf62a0e5f37e8935f9afd5d5cf57d0b77699e12f03e83f692b6e68396ef7df409a099da0eff23323d9dbc46566310cf79bb330e03c5cfcb14f2dca6817376a25fed4e591a0d644c69038d00f36a57ba40f7d4f92b8bcb7b4d7f6c99be2fac989825d269e9680",
            "0xf90211a02256a3dcab8a3656cfa906d0c3383987accb52b37d42436f2779b5e28a2e781ea00a1a86acaf1aafcad70bf8a462b3812d3d9d8dd04ec50a8d49db6eeb787538e1a02f728ef08fa473d3ee26f48cbbe025ff49c8efb7278b6a41392001b6a336ed9ea0a337a197c7beca40a182ee5e8a3ce5ecec54c9eca93161824bc8c8682c41b1d4a042bfe6c9c83b7829f827998a2f3c3556d3936adbe363b61e01f87d2553d3a4b2a05a9e6a84f98b98ac6d7ab19e649aee2cb37f7275055f9b6c25f0e8273dd0668ea070d6c892cc4f92b14ff2ad64eb0a0c653471cdaa788e40830363f31fc74ae084a0b155c0c14b5bfc1f832ab7f2de898e0ab90e2f51d9c3a9fefe3b9261b4b94a0ba01ab278c060ce4799fd3032cad51f8871bc2792ab195fbe2e3b18a66ec17a9255a04cf1677370cfd1113d7292c7642516c505931734ebee7ecfaf9cea60ae674044a0147032733387b67d84c2dd87f2dd68c7761cd3e505ec0703da30ac9a843f387aa0d7838721a1bb502a0dd278cc2b323358b35f49253e7b0a6fa7e1ea7943d0e3a1a018cc53f6f51671a7f984788cec8a3c80d3e1fc49d1bf6e255245f82ff3df6365a0218f211dd9cb46783d740eb0ac46cc1630f5f3e99d9c18006535fb94decee74ba0db499ee27ab3c1530244308ef91e7fa40cb5261609cb37857bdc4cefea434f81a050a2f6f0e7f10b9f957a566e2fd4641d6fee7277eef6ad4d4955c8a1d0f43dd480",
            "0xf901b1a0afda91b7b1dfce2e5442b5b727498d66c631f5d3e619c1123266796396c7b3aaa06b8822be2629b7e5b281e8e5d4770838b373e91cae52019e715e1135a491dd1ca0e0e75a7bf2358956ae0d320fccfe76a8379e66f8450c82a47b702bf64604c1f98080a003116e33645e334f221ef3b4724c77733b73382bb686127c9bed3928d1cc3c16a02951521fe4306019363d0b587ea1dec4b2df028364f689cfa57ee1cc4dbf109ca06505871148d8fe4e7c335393f1ecc660d793e686af2385a9acf1a3d9788b7700a085ff044bd791555cc59cfac5ed5c17e1c69959c9e93a82c935bbe7339d7112f1a0dbdad86b6dc440b20ebe6db935738851b7e482ed54f728962d4c6a2af072116ba03148d81cce54eefefd1adc6c457359eeca1892f49ec80e061cf7622d0b0d1c87a0842517cbab04fa095b7e0c6a3d4e61c79ecde20f60d1bb04fc55fe13d02de23a80a02ee52ddf4999ae7bc96c2d0c0afe7c4831263e588a91b716c841b96806bb5edda0d57a51a236d736e25388017b23bd6646e9150dad4ddf27d9024d64815995ebd0a06a60b7eef7476f51fd08686963ec92f5153a28f6a7cab73a8dec06158eff706b80",
          ],
          "value": 0n,
        },
      ],
    }
  `)
})
