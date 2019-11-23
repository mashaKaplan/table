import {Group} from '../models/Group';

export const papersData: Group[] = [
  {
    groupTitle: "סה''כ לאפיק מניות",
    subGroups: [{
      subGroupTitle: "סה''כ לתת אפיק קרנות נאמנות מניות ישראל",
      papers: [{
        id: 5126701,
        title: "4B א.ש סופה מניות",
        amount: 1895
      }]
    }, {
      subGroupTitle: "סה''כ לתת אפיק קרנות נאמנות מניות יתר",
      papers: [{
        id: 5105903,
        title: "אלטשולר שחר (40) יתר",
        amount: 439
      }]
    }, {
      subGroupTitle: "סה''כ לתת אפיק קרנות נאמנות מניות חו''ל",
      papers: [{
        id: 5105218,
        title: "4D א.ש הקרן היחקה",
        amount: 2561
      }, {
        id: 5108329,
        title: "אלטשולר שחר (4B) מניות גלובלי עד",
        amount: 10817
      }, {
        id: 5118609,
        title: "אלטשולר שחר (4B) שווקים מפותחים",
        amount: 18216
      }, {
        id: 5125034,
        title: "א.ש תייחת ופנאי (4D)",
        amount: 4776
      }]
    }]
  },
  {
    groupTitle: "סה''כ לאפיק מדד",
    subGroups: [{
      subGroupTitle: "סה''כ לתת אפיק קרנות נאמנות מדדיות קונצרן",
      papers: [ {
        id: 5105697,
        title: "0B! א.ש אג''ח חבחת",
        amount: 21785
      },
        {
          id: 5108642,
          title: "1B! אלטשולר אג''ח הזדמנויות",
          amount: 4398
        },
        {
          id: 5110085,
          title: "0O א.ש תל בונד",
          amount: 32726
        }]
    }, {
      subGroupTitle: "סה''כ לתת אפיק קרנות נאמנות מדדיות ממשלתי",
      papers: [{
        id: 5108667,
        title: "0O א.ש אג''ח מדינה צמודי מדד",
        amount: 54150
      }]
    }]
  },
  {
    groupTitle: "סה''כ לאפיק אג''ח חו''ל + מט''ח",
    subGroups: [{
      subGroupTitle: "סה''כ לתת אפיק קרנות נאמנות אג''ח חו''ל",
      papers: [{
        id: 5105911,
        title: "0D! א.ש אג''ח גלובלי",
        amount: 24401
      }, {
        id: 5118591,
        title: "אלטשולר שחם (0A)(!) אג''ח חו''ל",
        amount: 41436
      }]
    }]
  },
  {
    groupTitle: "סה''כ לאפיק שקלים",
    subGroups: [{
      subGroupTitle: "סה''כ לתת אפיק קרנות נאמנות שקליות",
      papers: [{
        id: 5100813,
        title: "0O א.ש שקלית ללא מניות",
        amount: 21498
      }]
    }]
  },
  {
    groupTitle: "סה''כ לאפיק עו''ש + פח''ק",
    subGroups: [{
      subGroupTitle: "סה''כ לתת אפיק פח''ק",
      papers: [{
        title: "פח''ק",
        amount: 9347
      }]
    }, {
      subGroupTitle: "סה''כ לתת אפיק עו''ש",
      papers: [{
        title: "עו''ש",
        amount: 33
      }]
    }]
  },
];
