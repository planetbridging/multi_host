'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9e26fb1ffa60cbc050d25412d50bae54",
"assets/assets/cards/Card_100_myo_Hiragana_O_s1.png": "de865ce04e9600b2d3cfc27b0f00356b",
"assets/assets/cards/Card_100_myo_Hiragana_O_s2.png": "d5facb13fc796305ab8a790133593101",
"assets/assets/cards/Card_101_rya_Hiragana_O_s1.png": "1e8204452034d493b01c979261e8832c",
"assets/assets/cards/Card_101_rya_Hiragana_O_s2.png": "a363958b9720f090b4345d422b02b5ba",
"assets/assets/cards/Card_102_ryu_Hiragana_O_s1.png": "07b0c9e79b6c7e5e3700a652213c44ec",
"assets/assets/cards/Card_102_ryu_Hiragana_O_s2.png": "ded64db5fc50079335d5c16b66088a7a",
"assets/assets/cards/Card_103_ryo_Hiragana_O_s1.png": "bb48770d03b04f9e41a9ae7484c89509",
"assets/assets/cards/Card_103_ryo_Hiragana_O_s2.png": "8a8d3af86933ceab60965b9d7d1a3fb0",
"assets/assets/cards/Card_104_Info_Hiragana_O_s1.png": "97b206afb1078367d299295ca8a5cbe3",
"assets/assets/cards/Card_104_Info_Hiragana_O_s2.png": "f0f014b9bdf86ce061386367642fab74",
"assets/assets/cards/Card_10_ke_Hiragana_O_s1.png": "91ee9128d77dd1f25c93b64d9d8b7814",
"assets/assets/cards/Card_10_ke_Hiragana_O_s2.png": "9f6d9fbe6155a5239390d8792f268386",
"assets/assets/cards/Card_11_ko_Hiragana_O_s1.png": "3ed1cd47bcc053d0498d72823f0f68b1",
"assets/assets/cards/Card_11_ko_Hiragana_O_s2.png": "89ede736bf62a3ce3c87e71490036192",
"assets/assets/cards/Card_12_sa_Hiragana_O_s1.png": "97e5576e38019c3ab015f6addd6cd51e",
"assets/assets/cards/Card_12_sa_Hiragana_O_s2.png": "e36de147005785eb152a9673a20477f5",
"assets/assets/cards/Card_13_shi_Hiragana_O_s1.png": "c0826d134b1cde7960f5e964e4fb13d7",
"assets/assets/cards/Card_13_shi_Hiragana_O_s2.png": "bfaf9126dabecfc59b8c11200042037e",
"assets/assets/cards/Card_14_su_Hiragana_O_s1.png": "d14c88b44176f04afcda3e994339f843",
"assets/assets/cards/Card_14_su_Hiragana_O_s2.png": "22308f724bfae1b35d0c4f03145eb0c6",
"assets/assets/cards/Card_15_se_Hiragana_O_s1.png": "b4a5ab9c583e4972caecd2a1a30a1441",
"assets/assets/cards/Card_15_se_Hiragana_O_s2.png": "f9c8e32933cc7add363291131c4cfa72",
"assets/assets/cards/Card_16_so_Hiragana_O_s1.png": "f893a1c83b41afb7bbb81bd6fca3daa8",
"assets/assets/cards/Card_16_so_Hiragana_O_s2.png": "e6c4e8cf824070715a028a9c2adfb333",
"assets/assets/cards/Card_17_ta_Hiragana_O_s1.png": "4b187f9058c47f927f5d388e39173618",
"assets/assets/cards/Card_17_ta_Hiragana_O_s2.png": "79ca2a49e47bbb46f2cc1cb3dbb25fdc",
"assets/assets/cards/Card_18_chi_Hiragana_O_s1.png": "0c346e6bbef32412ca642634fefd488a",
"assets/assets/cards/Card_18_chi_Hiragana_O_s2.png": "1850b27072eea996ce702967d2c8e732",
"assets/assets/cards/Card_19_tsu_Hiragana_O_s1.png": "e703e3480802b31cc6c87904290a2ee7",
"assets/assets/cards/Card_19_tsu_Hiragana_O_s2.png": "2dda3fabdb59f2d0c18bb49566f515b5",
"assets/assets/cards/Card_1_Intro_Hiragana_O_s1.png": "4e9650b1e5ad8a8d9465d26f07253775",
"assets/assets/cards/Card_1_Intro_Hiragana_O_s2.png": "3f8c038afe1af997a37ee668d5031117",
"assets/assets/cards/Card_20_te_Hiragana_O_s1.png": "8af8740b49b670a6385c6ee8681cd607",
"assets/assets/cards/Card_20_te_Hiragana_O_s2.png": "a28b6f080a089b1304b95dc16470ec7b",
"assets/assets/cards/Card_21_to_Hiragana_O_s1.png": "70d9e386ee0b2f03906a77800dcc63d3",
"assets/assets/cards/Card_21_to_Hiragana_O_s2.png": "933cf3978f6ce6ddd1b9af518f634640",
"assets/assets/cards/Card_22_na_Hiragana_O_s1.png": "c04b5f4beb5a969812daf48457032ee6",
"assets/assets/cards/Card_22_na_Hiragana_O_s2.png": "97b9ced4f57d322268925799fd784dda",
"assets/assets/cards/Card_23_ni_Hiragana_O_s1.png": "d25a646332fc60d6d0680da37cf006a7",
"assets/assets/cards/Card_23_ni_Hiragana_O_s2.png": "1092fc6637741f3eece828fbe71a2761",
"assets/assets/cards/Card_24_nu_Hiragana_O_s1.png": "ba7a2290d52344a27c3e2382f03322a5",
"assets/assets/cards/Card_24_nu_Hiragana_O_s2.png": "4a63dc5a23d22ac7f35e791a742fec43",
"assets/assets/cards/Card_25_ne_Hiragana_O_s1.png": "89ba73c2219a3b712411dc52a16fc328",
"assets/assets/cards/Card_25_ne_Hiragana_O_s2.png": "b973b24a671f26eed684ed3b990de008",
"assets/assets/cards/Card_26_no_Hiragana_O_s1.png": "ae800ffbc1bd2601ba4df4a74a67db2e",
"assets/assets/cards/Card_26_no_Hiragana_O_s2.png": "ad6dfa12d32d719303139be2d334f315",
"assets/assets/cards/Card_27_ha_Hiragana_O_s1.png": "a18bb762dfd92e7a454b805d7c6ab3a2",
"assets/assets/cards/Card_27_ha_Hiragana_O_s2.png": "00d377c250aa93fd0f6b83de844f71c3",
"assets/assets/cards/Card_28_hi_Hiragana_O_s1.png": "83e344a2972f4c51af8152aa2859680d",
"assets/assets/cards/Card_28_hi_Hiragana_O_s2.png": "e0b825eebd0869db174f98e5f74bfc8b",
"assets/assets/cards/Card_29_fu_Hiragana_O_s1.png": "0bc2cb36656354a0330a2669c80496f3",
"assets/assets/cards/Card_29_fu_Hiragana_O_s2.png": "018aa6342f4cc43d7d0b3b98ad432d72",
"assets/assets/cards/Card_2_a_Hiragana_O_s1.png": "140773c5299721747c21bda14b860d83",
"assets/assets/cards/Card_2_a_Hiragana_O_s2.png": "40d1704eea22534fd7ba94f46b871cf7",
"assets/assets/cards/Card_30_he_Hiragana_O_s1.png": "3545efbee0b6572ce1cb3468fd14997a",
"assets/assets/cards/Card_30_he_Hiragana_O_s2.png": "7a0b57adc759615b91d8aac44269957e",
"assets/assets/cards/Card_31_ho_Hiragana_O_s1.png": "5c194f4a447d7edc2ca3a545a88e51f5",
"assets/assets/cards/Card_31_ho_Hiragana_O_s2.png": "7f13135065b98b07c0c94ee17dcb06fa",
"assets/assets/cards/Card_32_ma_Hiragana_O_s1.png": "9fee09cd129250daee2ff9d9e34ef62d",
"assets/assets/cards/Card_32_ma_Hiragana_O_s2.png": "54c2aeb373235493db49607a12280c7e",
"assets/assets/cards/Card_33_mi_Hiragana_O_s1.png": "d1283d371dc7c8ffa2c0154eae4cfcdb",
"assets/assets/cards/Card_33_mi_Hiragana_O_s2.png": "b0e02a90965f6dac8878c40198ed8208",
"assets/assets/cards/Card_34_mu_Hiragana_O_s1.png": "c2537001f5f15868ad41c362bee8da22",
"assets/assets/cards/Card_34_mu_Hiragana_O_s2.png": "cce80f86089d3fa9fade57628ac3f44e",
"assets/assets/cards/Card_35_me_Hiragana_O_s1.png": "98176850f33d773e55f7e01303f4d326",
"assets/assets/cards/Card_35_me_Hiragana_O_s2.png": "cbfb70d76ada4cef3b7b58f2c26bfa6f",
"assets/assets/cards/Card_36_mo_Hiragana_O_s1.png": "d1c63a8e9de0be5a7fdb84933c44e1ad",
"assets/assets/cards/Card_36_mo_Hiragana_O_s2.png": "3de250b45766c7367d88677e2135605e",
"assets/assets/cards/Card_37_ya_Hiragana_O_s1.png": "cab88f892e65488f2685f14ff8372a64",
"assets/assets/cards/Card_37_ya_Hiragana_O_s2.png": "02484c3d7f57337b061c810af146166c",
"assets/assets/cards/Card_38_yu_Hiragana_O_s1.png": "1a335dc0d7a256185514453d3005e858",
"assets/assets/cards/Card_38_yu_Hiragana_O_s2.png": "79bee7f372b95396e34369409c4361ec",
"assets/assets/cards/Card_39_yo_Hiragana_O_s1.png": "bc177a2babb4a54de888cbff50623cc6",
"assets/assets/cards/Card_39_yo_Hiragana_O_s2.png": "39ed5ca26f99632ff89bb2d6cd51409d",
"assets/assets/cards/Card_3_i_Hiragana_O_s1.png": "85e4968d1707071de4bb768c71527af8",
"assets/assets/cards/Card_3_i_Hiragana_O_s2.png": "70ef540b67dcc06ba2ae008f3d5fe0da",
"assets/assets/cards/Card_40_ra_Hiragana_O_s1.png": "5a7d0384873bc84a4a3d041f17943a97",
"assets/assets/cards/Card_40_ra_Hiragana_O_s2.png": "392100640628b6ee31ecb6bd213ec762",
"assets/assets/cards/Card_41_ri_Hiragana_O_s1.png": "a90f3b1ed223f2984b62d2a0e6b73633",
"assets/assets/cards/Card_41_ri_Hiragana_O_s2.png": "240155a8120f85996cd7323e2fceb1bd",
"assets/assets/cards/Card_42_ru_Hiragana_O_s1.png": "4ff2040fd1a5af8fcf1c78a45fb76908",
"assets/assets/cards/Card_42_ru_Hiragana_O_s2.png": "9fe1be3bdec0ea8aa8ff39cfacdbb528",
"assets/assets/cards/Card_43_re_Hiragana_O_s1.png": "726f7bd7a19a8fffc393ceb585e5368f",
"assets/assets/cards/Card_43_re_Hiragana_O_s2.png": "140611a4bf827c7937dbb8f5e6685f6d",
"assets/assets/cards/Card_44_ro_Hiragana_O_s1.png": "de1630193b2b6035bd27a1bac1dc9530",
"assets/assets/cards/Card_44_ro_Hiragana_O_s2.png": "5077aceae5b540c61a0baea93757f618",
"assets/assets/cards/Card_45_wa_Hiragana_O_s1.png": "17bfa74cbd93e53814447318cf464f9e",
"assets/assets/cards/Card_45_wa_Hiragana_O_s2.png": "198be558efc7891a5aa2b52b56991519",
"assets/assets/cards/Card_46_o_wo_Hiragana_O_s1.png": "44460b90565a8e3373d29847f71abdc8",
"assets/assets/cards/Card_46_o_wo_Hiragana_O_s2.png": "2cc5b58cae0894e5bcdf5afebda2ec4b",
"assets/assets/cards/Card_47_n_Hiragana_O_s1.png": "57ebb8e00e2b0bbba5eb3c9909e4529a",
"assets/assets/cards/Card_47_n_Hiragana_O_s2.png": "ecefbfd9eb71cbc83a9f2c277ce83a68",
"assets/assets/cards/Card_48_ga_Hiragana_O_s1.png": "af30710489e0f6a29d91a96df40bbea3",
"assets/assets/cards/Card_48_ga_Hiragana_O_s2.png": "90ab9003cedb0f0a7fa14bdf6879c910",
"assets/assets/cards/Card_49_gi_Hiragana_O_s1.png": "403e805919e80fc0609cd1cd2777eb76",
"assets/assets/cards/Card_49_gi_Hiragana_O_s2.png": "e8f992511d8ea13611015257850252f1",
"assets/assets/cards/Card_4_u_Hiragana_O_s1.png": "c5d9cacf0ea28c6363e8e39f37cd350c",
"assets/assets/cards/Card_4_u_Hiragana_O_s2.png": "f5dbce40cca9cee7e8bc29aa5a872b24",
"assets/assets/cards/Card_50_gu_Hiragana_O_s1.png": "e856bf835c00c0513121f0578e8727f1",
"assets/assets/cards/Card_50_gu_Hiragana_O_s2.png": "f904000ecd36a1901d8266d6d3b90d96",
"assets/assets/cards/Card_51_ge_Hiragana_O_s1.png": "d1033998fa706b141d6961a5ef53e9dd",
"assets/assets/cards/Card_51_ge_Hiragana_O_s2.png": "1d87fd55c933f93b90f30692240a0bde",
"assets/assets/cards/Card_52_go_Hiragana_O_s1.png": "f537a40f033138c21ed7e1a9c1f65d7a",
"assets/assets/cards/Card_52_go_Hiragana_O_s2.png": "89fb6dad9484ecf9b59e9336cb52fb4d",
"assets/assets/cards/Card_53_za_Hiragana_O_s1.png": "81b51e89b1b426ea1d27ed773b422b23",
"assets/assets/cards/Card_53_za_Hiragana_O_s2.png": "54d6d01252d3b8b5c33e7145eb7b4545",
"assets/assets/cards/Card_54_ji_Hiragana_O_s1.png": "719928705114d6465beaf856879a39b4",
"assets/assets/cards/Card_54_ji_Hiragana_O_s2.png": "378400c20bdfb4f815cff13454364cc2",
"assets/assets/cards/Card_55_zu_Hiragana_O_s1.png": "3cd9acae53d6025a1391d336790f2cb6",
"assets/assets/cards/Card_55_zu_Hiragana_O_s2.png": "a471148af1d21cfd006b68ad6117d75e",
"assets/assets/cards/Card_56_ze_Hiragana_O_s1.png": "10514bb988a0865b791696c343dfca2e",
"assets/assets/cards/Card_56_ze_Hiragana_O_s2.png": "48bb0619d7c3c753422915667d1dd582",
"assets/assets/cards/Card_57_zo_Hiragana_O_s1.png": "a4ff02b796e75f9a26119b6cc25b0239",
"assets/assets/cards/Card_57_zo_Hiragana_O_s2.png": "88a2a0aecf897ff2004a953c959a60f9",
"assets/assets/cards/Card_58_da_Hiragana_O_s1.png": "9cf07b9207f5625bf5c0692e86367113",
"assets/assets/cards/Card_58_da_Hiragana_O_s2.png": "55af12db7b8df15f3f7dd3645dad8264",
"assets/assets/cards/Card_59_de_Hiragana_O_s1.png": "d72a68210436625e5aa8b48f575e2640",
"assets/assets/cards/Card_59_de_Hiragana_O_s2.png": "3e8e1d9aa4a3c2537c6aa4924d0a8953",
"assets/assets/cards/Card_5_e_Hiragana_O_s1.png": "4370e48708844ff6ce57b8efb764a09c",
"assets/assets/cards/Card_5_e_Hiragana_O_s2.png": "c5727271fd913859f9aa73756272915b",
"assets/assets/cards/Card_60_do_Hiragana_O_s1.png": "fbcc6f7da0ab84d82d2f09c22c4ce230",
"assets/assets/cards/Card_60_do_Hiragana_O_s2.png": "cd23d826b78146c75b05b457455811ef",
"assets/assets/cards/Card_61_ba_Hiragana_O_s1.png": "5d9de7c6d0736822559f8b05e16ff380",
"assets/assets/cards/Card_61_ba_Hiragana_O_s2.png": "cc96c460d5481e59ab017d9eb5a60cf3",
"assets/assets/cards/Card_62_bi_Hiragana_O_s1.png": "af746dc2b3a6179e253eb7d2e247e8de",
"assets/assets/cards/Card_62_bi_Hiragana_O_s2.png": "aae84bb1840257ea963502af387f788c",
"assets/assets/cards/Card_63_bu_Hiragana_O_s1.png": "5c65df0b2b78ffe2ec1f18e8a1fb51bf",
"assets/assets/cards/Card_63_bu_Hiragana_O_s2.png": "902b06374661623153d6ac214de37c1d",
"assets/assets/cards/Card_64_be_Hiragana_O_s1.png": "cbd8d17ce02fdd354421f74e9040005a",
"assets/assets/cards/Card_64_be_Hiragana_O_s2.png": "9524e79e3a9aef4fbec2842ed78b0ab3",
"assets/assets/cards/Card_65_bo_Hiragana_O_s1.png": "e8b2db3ac6f30c4d7ec4e55db3712bd3",
"assets/assets/cards/Card_65_bo_Hiragana_O_s2.png": "f5c94ad5ce82e38bc4873ded94f51d8f",
"assets/assets/cards/Card_66_pa_Hiragana_O_s1.png": "d0dbe336faff517a6825cd2b93018fac",
"assets/assets/cards/Card_66_pa_Hiragana_O_s2.png": "80f730e2dfbbf1217dc139e8822052cc",
"assets/assets/cards/Card_67_pi_Hiragana_O_s1.png": "79503d16375a5f6783f48f58cec4f282",
"assets/assets/cards/Card_67_pi_Hiragana_O_s2.png": "15290315807caf4aa4b539c2c44befe5",
"assets/assets/cards/Card_68_pu_Hiragana_O_s1.png": "736744b7727e6b3d67bce79886458612",
"assets/assets/cards/Card_68_pu_Hiragana_O_s2.png": "ad7284f75616815108c4c9235e89eec0",
"assets/assets/cards/Card_69_pe_Hiragana_O_1.png": "4857e99aa0bb103a55d9ce5188f19637",
"assets/assets/cards/Card_69_pe_Hiragana_O_s2.png": "9a6e67407169da171918d39dd2e78ef9",
"assets/assets/cards/Card_6_o_Hiragana_O_s1.png": "6dfaa7e5bb173c7f34179611d1a3078d",
"assets/assets/cards/Card_6_o_Hiragana_O_s2.png": "6c0f0bc1c2107268562bf170d6ee8f88",
"assets/assets/cards/Card_70_po_Hiragana_O_s1.png": "54aa0c824b68d9dfb6980fee55ff655a",
"assets/assets/cards/Card_70_po_Hiragana_O_s2.png": "41a8005fb0b42510834ddf336a8163cd",
"assets/assets/cards/Card_71_kya_Hiragana_O_s1.png": "68cdd0b110e93e292dc65f815052920c",
"assets/assets/cards/Card_71_kya_Hiragana_O_s2.png": "022a1c0086a04cd449571de36c762941",
"assets/assets/cards/Card_72_kyu_Hiragana_O_s1.png": "9947e370b1dde291864b13334837cfda",
"assets/assets/cards/Card_72_kyu_Hiragana_O_s2.png": "6fdc72a614b71c77f9ab57c7ddd8baab",
"assets/assets/cards/Card_73_kyo_Hiragana_O_s1.png": "8da4a095424018a3beb44a6b04889328",
"assets/assets/cards/Card_73_kyo_Hiragana_O_s2.png": "a329d0d54c93c0a0ea7cf43223034ce7",
"assets/assets/cards/Card_74_gya_Hiragana_O_s1.png": "e1a82800324f971a836f43964421cc51",
"assets/assets/cards/Card_74_gya_Hiragana_O_s2.png": "092b7b57661729689eb5505f67253276",
"assets/assets/cards/Card_75_gyu_Hiragana_O_s1.png": "927d80ecc3f9da42b649545c92dac97d",
"assets/assets/cards/Card_75_gyu_Hiragana_O_s2.png": "84ae93f96943ac55f9c48087de5ee912",
"assets/assets/cards/Card_76_gyo_Hiragana_O_s1.png": "4809fd3c3ddc6f135cc5951fd7acb7fe",
"assets/assets/cards/Card_76_gyo_Hiragana_O_s2.png": "d44cc0dbde10b757cd2b229ff18fb2eb",
"assets/assets/cards/Card_77_sha_Hiragana_O_s1.png": "f5b33b445bfa36f15a0f0d11936b5c94",
"assets/assets/cards/Card_77_sha_Hiragana_O_s2.png": "7b6f251f3f77ea78a3dc5cca6140d531",
"assets/assets/cards/Card_78_shu_Hiragana_O_s1.png": "7a762b7e503c2d5dfa301e43dbe76a81",
"assets/assets/cards/Card_78_shu_Hiragana_O_s2.png": "490fe9ad0abb2e7be71f22ea6bd42031",
"assets/assets/cards/Card_79_sho_Hiragana_O_s1.png": "056fe50d668cd4c580df166479147822",
"assets/assets/cards/Card_79_sho_Hiragana_O_s2.png": "de570a09dda39a8b614d6cb185a04632",
"assets/assets/cards/Card_7_ka_Hiragana_O_s1.png": "7d796cd4588440e3fef83ada50a535ca",
"assets/assets/cards/Card_7_ka_Hiragana_O_s2.png": "7edc0183502d8bea07e421c579811eae",
"assets/assets/cards/Card_80_ja_Hiragana_O_s1.png": "7723ed5568db1cd992e4743600a5f7f1",
"assets/assets/cards/Card_80_ja_Hiragana_O_s2.png": "1f16b5b4e1803481aa23a8aa872ec43a",
"assets/assets/cards/Card_81_ju_Hiragana_O_s1.png": "d08d72feb3059487244319a107abd203",
"assets/assets/cards/Card_81_ju_Hiragana_O_s2.png": "91c3d0e2233788de2befab55ca6a7ab1",
"assets/assets/cards/Card_82_jo_Hiragana_O_s1.png": "51e29186e3b0867dac2321cc681701f2",
"assets/assets/cards/Card_82_jo_Hiragana_O_s2.png": "d47b3009330a6e784db657cc1a7799dc",
"assets/assets/cards/Card_83_cha_Hiragana_O_s1.png": "a06c3828b9335ea2769dcd691370a1f6",
"assets/assets/cards/Card_83_cha_Hiragana_O_s2.png": "48736a50151c94fc05c51d35110b6bda",
"assets/assets/cards/Card_84_chu_Hiragana_O_s1.png": "008bc202fb4e83c259ce04a843acd1fa",
"assets/assets/cards/Card_84_chu_Hiragana_O_s2.png": "b7d40f0fa50aa4f27c2656fc21b8be05",
"assets/assets/cards/Card_85_cho_Hiragana_O_s1.png": "060c7ab10ab040be748c7466c95ffb95",
"assets/assets/cards/Card_85_cho_Hiragana_O_s2.png": "d424cf1dabf2564cf0699d53eed82abf",
"assets/assets/cards/Card_86_nya_Hiragana_O_s1.png": "d4af7fb52e273e9d8065492eb3697038",
"assets/assets/cards/Card_86_nya_Hiragana_O_s2.png": "2deaaa15b74fad40435fcb2818256f64",
"assets/assets/cards/Card_87_nyu_Hiragana_O_s1.png": "a32bd57e7b19f3d71c2ec070ec8ede91",
"assets/assets/cards/Card_87_nyu_Hiragana_O_s2.png": "d65453ba03a55eee88cca555cda9c996",
"assets/assets/cards/Card_88_nyo_Hiragana_O_s1.png": "21de3ac9cc7c872d0a9c582bb20f55eb",
"assets/assets/cards/Card_88_nyo_Hiragana_O_s2.png": "0ec9009258b946ed37194071fb66a9c0",
"assets/assets/cards/Card_89_hya_Hiragana_O_s1.png": "ee231e64cfef51882f80cab21ab754d7",
"assets/assets/cards/Card_89_hya_Hiragana_O_s2.png": "78a2b046c849f2fc3163fec93981c7d5",
"assets/assets/cards/Card_8_ki_Hiragana_O_s1.png": "1efbe5c4101d76a9b63469d30ec2f522",
"assets/assets/cards/Card_8_ki_Hiragana_O_s2.png": "fa76fbfee89bb05a3b8e7acce4b289fb",
"assets/assets/cards/Card_90_hyu_Hiragana_O_s1.png": "534306a816d38eddcab86c7ca93fee39",
"assets/assets/cards/Card_90_hyu_Hiragana_O_s2.png": "d6b602cf47f2bb6c9f6a542c6b4df1df",
"assets/assets/cards/Card_91_hyo_Hiragana_O_s1.png": "f0f4e1af22b2db9644d6d631ea4847d5",
"assets/assets/cards/Card_91_hyo_Hiragana_O_s2.png": "c80580dc257395f3693c36182a592f84",
"assets/assets/cards/Card_92_bya_Hiragana_O_s1.png": "bc830a500fdba9a9a113f86023da0e2e",
"assets/assets/cards/Card_92_bya_Hiragana_O_s2.png": "43e039a708e9101cc810498eaa719ffb",
"assets/assets/cards/Card_93_byu_Hiragana_O_s1.png": "86a12dd285ea4a072a1e91a45c3f1b1c",
"assets/assets/cards/Card_93_byu_Hiragana_O_s2.png": "5d9b8332b9d2ffaab14b7ce3d7c68ec4",
"assets/assets/cards/Card_94_byo_Hiragana_O_s1.png": "a56476a4d64fa598deea14e534419c8d",
"assets/assets/cards/Card_94_byo_Hiragana_O_s2.png": "fb0a6b9b02b770aac1ee2a521f3d10e8",
"assets/assets/cards/Card_95_pya_Hiragana_O_s1.png": "f556266f3ce74ac2401f8789196f9994",
"assets/assets/cards/Card_95_pya_Hiragana_O_s2.png": "d0345772fdb27b485cabf03923bad9f5",
"assets/assets/cards/Card_96_pyu_Hiragana_O_s1.png": "bcd443a6e0d34bf2d626a27d82b535e0",
"assets/assets/cards/Card_96_pyu_Hiragana_O_s2.png": "526adae525d8a3cdf9a5afac7a754a19",
"assets/assets/cards/Card_97_pyo_Hiragana_O_s1.png": "ee8b90ff55601249a31bb288d80b5bcf",
"assets/assets/cards/Card_97_pyo_Hiragana_O_s2.png": "577942b6d093e929a9d23d310d3bf08c",
"assets/assets/cards/Card_98_mya_Hiragana_O_s1.png": "5c89ad6d8fd5922183de1475bf1a3e8f",
"assets/assets/cards/Card_98_mya_Hiragana_O_s2.png": "a5b42fa173299c47aadadbe93b9fa306",
"assets/assets/cards/Card_99_myu_Hiragana_O_s1.png": "8392dbc6c496b4376ad18060d2d7da1b",
"assets/assets/cards/Card_99_myu_Hiragana_O_s2.png": "2b521683c095430f32cda7aec9d3ae48",
"assets/assets/cards/Card_9_ku_Hiragana_O_s1.png": "0b55d1fff39c1011866243ac769e2e28",
"assets/assets/cards/Card_9_ku_Hiragana_O_s2.png": "42a7a29a132406974cb1f46d24db151f",
"assets/assets/cards/card_bg.jpg": "c320f4f18a63f05f2957c26974e44772",
"assets/assets/cards.txt": "7082a66ebb57d36bb02981699da634b5",
"assets/assets/imgs/anime_glasses_boy.png": "46eaf0a5cd8c01de78ca57f9a62e5c0b",
"assets/assets/imgs/blue_hair_girl.png": "3ea5c3dd942bae117a7f47ea2aa17809",
"assets/assets/imgs/Card-showing-fav-anime.jpg": "cebd168e1942927d100ff25a1747eb49",
"assets/assets/imgs/card_bg.jpg": "c320f4f18a63f05f2957c26974e44772",
"assets/assets/imgs/Logo.png": "edb6f9c133d862d563f05aa16d1565c7",
"assets/assets/imgs/red_hair_boy_with_chest.png": "a1be1842d5f858b6d3c99f3d2acafde4",
"assets/assets/Logo.png": "edb6f9c133d862d563f05aa16d1565c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "dac8579d23748e28ea982e54dd564529",
"/": "dac8579d23748e28ea982e54dd564529",
"main.dart.js": "1a97a70b5f9e1bf17aa0e8251c4ebb1a",
"manifest.json": "edcf414e8145827c328b7143641f60a1",
"version.json": "b97f733838db2a365026e6fad43e4270"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
