"use strict";
(self.webpackChunkraijins_fronend =
  self.webpackChunkraijins_fronend || []).push([
  [154],
  {
    9858: function (e, n, t) {
      var a = t(1413),
        s = (t(2791), t(4280)),
        i = t(184),
        r = {
          container: function (e) {
            return (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                boxShadow: "0px 0px 3px rgba(255, 255, 255)",
                fontFamily: "mont",
                borderRadius: "25px",
              }
            );
          },
          control: function (e) {
            return (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                backgroundColor: "#111111",
                boxShadow: "0px 0px 3px rgba(255, 255, 255)",
                borderRadius: "25px",
                padding: "0.5rem",
                border: "none",
              }
            );
          },
          option: function (e, n) {
            return (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                borderRadius: "10px",
                backgroundColor: n.isFocused ? "#222222" : "#111111",
                fontFamily: "mont",
              }
            );
          },
          singleValue: function (e, n) {
            return (0, a.Z)((0, a.Z)({}, e), {}, { color: "#bbbbbb" });
          },
          noOptionsMessage: function (e, n) {
            return (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              { backgroundColor: "#111111" }
            );
          },
          menu: function (e, n) {
            return (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                backgroundColor: "#111111",
                borderRadius: "10px",
                boxShadow: "0px 0px 1.8px rgba(214, 214, 214, 0.12)",
              }
            );
          },
          input: function (e, n) {
            return (0, a.Z)((0, a.Z)({}, e), {}, { color: "#bbbbbb" });
          },
        };
      n.Z = function (e) {
        var n = e.options,
          t = e.value,
          a = e.onChange;
        return (0, i.jsx)(s.ZP, {
          options: n,
          styles: r,
          value: t,
          onChange: a,
        });
      };
    },
    5514: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(1694),
        s = t.n(a),
        i = t(184),
        r = function (e) {
          var n = e.children,
            t = e.classes;
          return (0, i.jsx)("p", {
            className: s()("description", t),
            children: n,
          });
        };
    },
    4731: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var a = t(1087),
        s = t(1694),
        i = t.n(s),
        r = t(4373),
        c = t(184),
        d = function () {
          return (0, c.jsxs)("button", {
            className: i()("back-to-top-btn"),
            onClick: function () {
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            children: [(0, c.jsx)(r.yTe, {}), " back to top"],
          });
        },
        l = t.p + "static/media/NinetailsLogo.6d32e0e230ece5c2d7cd.png",
        o = function () {
          return (0, c.jsxs)("div", {
            className: i()("footer"),
            children: [
              (0, c.jsxs)("p", {
                className: i()("slogan"),
                children: [
                  "we are ",
                  (0, c.jsx)("span", { children: "inevitable!" }),
                ],
              }),
              (0, c.jsxs)("div", {
                className: i()("links"),
                children: [
                  (0, c.jsxs)("div", {
                    className: i()("copyright"),
                    children: [
                      "\xa9 2023 by nine tails ink",
                      " ",
                      (0, c.jsx)("img", { src: l, alt: "nine-tails-ink" }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className: i()("mail-container"),
                    children: (0, c.jsx)(a.rU, {
                      to: "/",
                      children: "hello@lifeofhel.xyz",
                    }),
                  }),
                  (0, c.jsx)("div", {
                    className: i()("back-to-top-container"),
                    children: (0, c.jsx)(d, {}),
                  }),
                ],
              }),
            ],
          });
        },
        u = (t(1470), t(2895)),
        p = function (e) {
          var n = e.children;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("main", { children: n }),
              (0, c.jsx)(u.Z, {}),
              (0, c.jsx)(o, {}),
            ],
          });
        };
    },
    4690: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(1694),
        s = t.n(a),
        i = t(184),
        r = function (e) {
          var n = e.children,
            t = e.classes;
          return (0, i.jsx)("h1", {
            className: s()("page-title", t),
            children: n,
          });
        };
    },
    2406: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      t(8745);
      var a = t(7271),
        s = t.p + "static/media/X.ca690ff6ed3bb8c3bdf2.png",
        i = t(184),
        r = function (e) {
          var n = e.children,
            t = e.open,
            r = (e.setOpen, e.onOpenModal, e.onCloseModal),
            c = e.classes;
          return (0, i.jsxs)(a.u, {
            open: t,
            onClose: r,
            center: !0,
            classNames: { modal: "raijins-modal ".concat(c) },
            children: [
              (0, i.jsx)("button", {
                onClick: r,
                className: "shut-btn",
                children: (0, i.jsx)("img", { src: s, alt: "X.png" }),
              }),
              n,
            ],
          });
        };
    },
    4658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(9439),
        s = t(2791),
        i = t(1694),
        r = t.n(i),
        c = t.p + "static/media/Mousedown.1edc0d6ff7f82bd612f3.gif",
        d = t(184),
        l = function () {
          var e = (0, s.useState)(0),
            n = (0, a.Z)(e, 2),
            t = (n[0], n[1]);
          return (
            (0, s.useEffect)(function () {
              var e = function () {
                t(window.scrollY);
              };
              return (
                window.addEventListener("scroll", e),
                function () {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, d.jsx)("div", {
              className: r()("scroll-btn"),
              children: (0, d.jsx)("div", {
                className: r()("img-container"),
                children: (0, d.jsx)("img", {
                  src: c,
                  alt: "scroll-btn",
                  width: "100%",
                }),
              }),
            })
          );
        };
    },
    6839: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(1694),
        s = t.n(a),
        i = t(184),
        r = function (e) {
          var n = e.children,
            t = e.classes;
          return (0, i.jsx)("h2", {
            className: s()("section-title", t),
            children: n,
          });
        };
    },
    2178: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return re;
          },
        });
      var a = t(3971),
        s = t(4731),
        i = t(9439),
        r = t(2791),
        c = t(1694),
        d = t.n(c),
        l = t(6839),
        o = t(2406),
        u = t(6978),
        p =
          (t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p,
          t.p + "static/media/Avatar0sm.406e61e56811650b35fe.png"),
        m = t.p + "static/media/Avatar00sm.ce208aaa4f57501eb479.png",
        h = t.p + "static/media/Avatar1sm.858fa3cb6ea5c3e11d58.png",
        j = t.p + "static/media/Avatar2sm.e0e6f553eb4471f47dc6.png",
        x = t.p + "static/media/Avatar4sm.578846acaea14c7c9001.png",
        y = t(184),
        b = function (e) {
          var n = e.data,
            t = e.onNFTImgClick;
          return (0, y.jsxs)("div", {
            className: d()("earned-ticket-card", "mb-2"),
            children: [
              (0, y.jsxs)("h6", {
                className: d()("nft-type", "mb-1"),
                children: [
                  "nft type: ",
                  (0, y.jsx)("span", {
                    className: d()("italic"),
                    children: n.label,
                  }),
                ],
              }),
              (0, y.jsx)("div", {
                className: d()("d-flex", "justify-center", "mb-1"),
                children: n.images.map(function (e) {
                  return (0, y.jsx)(
                    "img",
                    {
                      src: e,
                      alt: e,
                      width: "14%",
                      className: d()("nft-image"),
                      onClick: function () {
                        return t(e);
                      },
                    },
                    e
                  );
                }),
              }),
              (0, y.jsxs)("div", {
                className: d()("d-flex", "flex-column", "gap-1"),
                children: [
                  (0, y.jsxs)("div", {
                    className: d()("length-ticket"),
                    children: [
                      "7 - day:",
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("italic"),
                        children: [n.day7, " ticket", 1 === n.day7 ? "" : "s"],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className: d()("length-ticket"),
                    children: [
                      "30 - day:",
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("italic"),
                        children: [
                          n.day30,
                          " ticket",
                          1 === n.day30 ? "" : "s",
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className: d()("length-ticket"),
                    children: [
                      "60 - day:",
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("italic"),
                        children: [
                          n.day60,
                          " ticket",
                          1 === n.day60 ? "" : "s",
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className: d()("length-ticket"),
                    children: [
                      "90 - day:",
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("italic"),
                        children: [
                          n.day90,
                          " ticket",
                          1 === n.day790 ? "" : "s",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        f = [
          {
            label: "raijins",
            type: "raijins",
            images: [
              p,
              m,
              h,
              j,
              "data:image/png;base64,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",
              x,
            ],
            day7: 5,
            day30: 21,
            day60: 43,
            day90: 70,
            reward: 15,
          },
        ],
        g = function (e) {
          var n = e.isMobile,
            t = (0, r.useState)(!1),
            a = (0, i.Z)(t, 2),
            s = a[0],
            c = a[1],
            p = (0, r.useState)(null),
            m = (0, i.Z)(p, 2),
            h = m[0],
            j = m[1],
            x = function (e) {};
          return (0, y.jsxs)("div", {
            className: d()("earned-tickets"),
            children: [
              (0, y.jsxs)(l.Z, {
                classes: "mb-3",
                children: [
                  "# ",
                  (0, y.jsx)("img", {
                    src: u,
                    alt: "raijins-ticket.png",
                    width: "70px",
                  }),
                  " earned",
                  " ",
                  (0, y.jsx)("span", { children: "per staking period" }),
                ],
              }),
              n
                ? f.map(function (e) {
                    return (0, y.jsx)(b, { data: e, onNFTImgClick: x }, e.type);
                  })
                : (0, y.jsxs)("table", {
                    className: d()("earned-tickets-table"),
                    children: [
                      (0, y.jsxs)("thead", {
                        children: [
                          (0, y.jsxs)("tr", {
                            children: [
                              (0, y.jsx)("th", { rowSpan: 2 }),
                              (0, y.jsx)("th", {
                                rowSpan: 2,
                                className: d()("underline", "image-cell"),
                                children: "nft type",
                              }),
                              (0, y.jsx)("th", {
                                colSpan: 4,
                                className: d()("text-right"),
                                children: "staking length",
                              }),
                            ],
                          }),
                          (0, y.jsxs)("tr", {
                            children: [
                              (0, y.jsx)("th", { children: "7 - day" }),
                              (0, y.jsx)("th", { children: "30 - day" }),
                              (0, y.jsx)("th", { children: "60 - day" }),
                              (0, y.jsx)("th", { children: "90 - day" }),
                            ],
                          }),
                        ],
                      }),
                      (0, y.jsx)("tbody", {
                        children: f.map(function (e) {
                          return (0, y.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, y.jsx)("th", {
                                  className: d()("nft-type text-right"),
                                  children: e.label,
                                }),
                                (0, y.jsx)("td", {
                                  className: d()(
                                    "d-flex",
                                    "justify-between",
                                    "image-cell"
                                  ),
                                  children: e.images.map(function (n, t) {
                                    return (0,
                                    y.jsx)("img", { src: n, alt: "image-".concat(e.type).concat(t, ".jpg"), onClick: function () {}, className: d()("nft-image") }, t);
                                  }),
                                }),
                                (0, y.jsxs)("td", {
                                  children: [
                                    e.day7,
                                    (0, y.jsx)("br", {}),
                                    "ticket",
                                    1 == e.day7 ? "" : "s",
                                  ],
                                }),
                                (0, y.jsxs)("td", {
                                  children: [
                                    e.day30,
                                    (0, y.jsx)("br", {}),
                                    "ticket",
                                    1 == e.day30 ? "" : "s",
                                  ],
                                }),
                                (0, y.jsxs)("td", {
                                  children: [
                                    e.day60,
                                    (0, y.jsx)("br", {}),
                                    "ticket",
                                    1 == e.day60 ? "" : "s",
                                  ],
                                }),
                                (0, y.jsxs)("td", {
                                  children: [
                                    e.day90,
                                    (0, y.jsx)("br", {}),
                                    "ticket",
                                    1 == e.day90 ? "" : "s",
                                  ],
                                }),
                              ],
                            },
                            e.type
                          );
                        }),
                      }),
                    ],
                  }),
              (0, y.jsx)(o.Z, {
                open: s,
                onCloseModal: function () {
                  j(null), c(!1);
                },
                classes: "p-0 ".concat(n ? "w-90" : "w-30"),
                children: (0, y.jsx)("img", { src: h, width: "100%" }),
              }),
            ],
          });
        },
        v = t(5514),
        k = t(4690),
        N = t(9146),
        A = t.p + "static/media/Vita.583379077f6c8eaf2594.png",
        I =
          (t(4658),
          function (e) {
            var n = e.connectWallet;
            return (0, y.jsxs)("div", {
              className: d()("staking-hero"),
              children: [
                (0, y.jsxs)("div", {
                  className: d()("page-intro"),
                  children: [
                    (0, y.jsxs)(k.Z, {
                      children: [
                        "raijins ",
                        (0, y.jsx)("span", { children: "staking" }),
                      ],
                    }),
                    (0, y.jsx)(v.Z, {
                      children:
                        "Connect your wallet to start staking your Filip NFTs.",
                    }),
                    (0, y.jsx)(v.Z, {
                      children: "For more information, scroll down",
                    }),
                    (0, y.jsx)(N.Z, {
                      variant: "primary",
                      text: "connect wallet",
                      onBtnClick: n,
                    }),
                  ],
                }),
                (0, y.jsx)("div", {
                  className: d()("hero-img-container"),
                  children: (0, y.jsx)("img", {
                    src: A,
                    alt: "vita.png",
                    width: "100%",
                  }),
                }),
              ],
            });
          }),
        w = t(4165),
        T = t(5861),
        C = t(4887),
        R = t(4029),
        Z = t(6747),
        S =
          (t(8200),
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACQCAQAAABuFHvmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTEyLTAzVDAwOjE3OjI3KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTEyLTAzVDAwOjE3OjI3KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0xMi0wM1QwMDoxNzoyNyswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5ZjBkYzI0ZS1mM2ExLTM1NGMtOGJhYy04MDVlMTI0YjAxMWIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1Nzc4ZjMyNy0wMDg4LTk0NDYtYjQ4Mi01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"),
        M = t.p + "static/media/XLight.b35f626381dc5eb8ee90.png",
        E = t(9165),
        L = t(3967),
        O = t(4976),
        z = t(696),
        F = t(3433),
        B = t(3658),
        D = t(5190),
        W = t(3605),
        Q = t(5410);
      var U = JSON.parse(
          '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"collection","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"AddAutoRestake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"collection","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timeType","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"collection","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UnStake","type":"event"},{"inputs":[{"internalType":"address[]","name":"_collections","type":"address[]"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"addAutoRestake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_collection","type":"address"},{"internalType":"bool","name":"_allow","type":"bool"}],"name":"allowCollectionToStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowedToStake","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoRestakeAsDefault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collections","type":"address[]"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_collection","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collections","type":"address[]"},{"internalType":"address","name":"_user","type":"address"}],"name":"getApprovalStatus","outputs":[{"components":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"bool","name":"isApproval","type":"bool"}],"internalType":"struct StakingRaijins.ApprovalStatus[]","name":"_approvalStatus","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collections","type":"address[]"},{"internalType":"address","name":"_user","type":"address"}],"name":"getStakingInfo","outputs":[{"components":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_timeType","type":"uint256"},{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"bool","name":"_autoRestake","type":"bool"},{"internalType":"bool","name":"_isClaimed","type":"bool"},{"internalType":"uint256","name":"_pendingTicket","type":"uint256"}],"internalType":"struct StakingRaijins.StakingInfo[]","name":"_nftsStaked","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collections","type":"address[]"}],"name":"getTokensInWallet","outputs":[{"components":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"token_id","type":"uint256"}],"internalType":"struct StakingRaijins.TokenInfo[]","name":"_tokensInWallet","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raijinsTicket","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_collection","type":"address"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"pendingTicket","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collections","type":"address[]"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"removeAutoRestake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardCondition","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"period","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_autoRestakeAsDefault","type":"bool"}],"name":"setAutoRestakeAsDefault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timeType","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setRewardCondition","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardTokenAddress","type":"address"}],"name":"setRewardTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collections","type":"address[]"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeTypes","type":"uint256[]"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collections","type":"address[]"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"unStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawTickets","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
        ),
        Y = function (e) {
          var n = e.nft,
            t = e.timeTypeInfo,
            a = e.currentTimeType,
            s = e.index,
            i = e.selectStatusInWallet,
            r = e.handleSelectNFTInWallet;
          return (0, y.jsxs)("div", {
            className: d()("raijins-staking-card"),
            children: [
              (0, y.jsx)("div", {
                className: d()("img-container"),
                children: (0, y.jsx)("img", {
                  src: n.image,
                  alt: "".concat(n.image),
                  width: "100%",
                }),
              }),
              (0, y.jsxs)("div", {
                children: [
                  (0, y.jsxs)("p", {
                    className: d()("text-secondary", "uppercase", "mb-1"),
                    children: [
                      "NFT #: ",
                      (0, y.jsx)("br", {}),
                      (0, y.jsxs)("span", {
                        className: d()("text-primary", "italic"),
                        children: [n.name, " #", n.id],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("p", {
                    className: d()("text-secondary", "uppercase", "mb-1"),
                    children: [
                      "staking period:",
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("text-primary", "italic"),
                        children: [t[a].period, " day"],
                      }),
                      " ",
                    ],
                  }),
                  (0, y.jsxs)("p", {
                    className: d()("text-secondary", "uppercase", "mb-1"),
                    children: [
                      "estimated reward:",
                      (0, y.jsx)("br", {}),
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("text-primary", "italic"),
                        children: [n.rewards, " raijins tickets"],
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "raijins-checkbox",
                children: [
                  (0, y.jsx)("input", {
                    type: "checkbox",
                    id: "raijinsCheckbox-".concat(s),
                    checked: !0 === i[s],
                    onChange: function () {
                      return r(s);
                    },
                    value: i[s],
                  }),
                  (0, y.jsx)("label", {
                    htmlFor: "raijinsCheckbox-".concat(s),
                  }),
                ],
              }),
            ],
          });
        },
        J = function (e) {
          var n = e.nft,
            t = e.selectStatusStaked,
            a = e.index,
            s = e.handleSelectNFTStaked,
            i = e.timeTypeInfo;
          return (0, y.jsxs)("div", {
            className: d()("raijins-staked-card"),
            children: [
              (0, y.jsx)("div", {
                className: d()("img-container"),
                children: (0, y.jsx)("img", {
                  src: n.image,
                  alt: "".concat(n.image),
                  width: "100%",
                }),
              }),
              (0, y.jsxs)("div", {
                children: [
                  (0, y.jsxs)("p", {
                    className: d()("text-secondary", "uppercase", "mb-1"),
                    children: [
                      "NFT #: ",
                      (0, y.jsx)("br", {}),
                      (0, y.jsxs)("span", {
                        className: d()("text-primary", "italic"),
                        children: [n.name, " #", n.id],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("p", {
                    className: d()("text-secondary", "uppercase", "mb-1"),
                    children: [
                      "auto restake:",
                      " ",
                      (0, y.jsx)("button", {
                        className: d()("auto-restake-btn"),
                        children: (0, y.jsx)("img", {
                          src: !0 === n.autoRestake ? S : M,
                          alt: "arrow.png",
                          width: "100%",
                        }),
                      }),
                    ],
                  }),
                  (0, y.jsxs)("p", {
                    className: d()("text-secondary", "uppercase", "mb-1"),
                    children: [
                      "remaining period:",
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("text-primary", "italic"),
                        children: [
                          n.leftTime,
                          " days left",
                          (0, y.jsx)("br", {}),
                          "(",
                          i[n.timeType].period,
                          " days programme)",
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("p", {
                    className: d()("text-secondary", "uppercase", "mb-1"),
                    children: [
                      "next reward:",
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("text-primary", "italic"),
                        children: [n.nextTicket, " raijins tickets"],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("p", {
                    className: d()("text-secondary", "uppercase", "mb-1"),
                    children: [
                      "claimable reward:",
                      " ",
                      (0, y.jsxs)("span", {
                        className: d()("text-primary", "italic"),
                        children: [n.claimableTicket, " raijins tickets"],
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "raijins-checkbox",
                children: [
                  (0, y.jsx)("input", {
                    type: "checkbox",
                    id: "raijinsCheckbox-".concat(a),
                    checked: !0 === t[a],
                    onChange: function () {
                      return s(a);
                    },
                    value: t[a],
                  }),
                  (0, y.jsx)("label", {
                    htmlFor: "raijinsCheckbox-".concat(a),
                  }),
                ],
              }),
            ],
          });
        },
        G = t(9858),
        X = t(8806),
        H = [
          { label: "7-day", id: "seven", period: 7 },
          { label: "30-day", id: "thirty", period: 30 },
          { label: "60-day", id: "sixty", period: 60 },
          { label: "90-day", id: "ninety", period: 90 },
        ],
        K = [],
        V = [],
        P = function (e) {
          var n = e.isMobile,
            t = (0, a.Ge)(),
            s = t.active,
            c = t.library,
            o = t.account,
            u = (0, r.useState)(0),
            p = (0, i.Z)(u, 2),
            m = p[0],
            h = p[1],
            j = (0, r.useState)(!0),
            x = (0, i.Z)(j, 2),
            b = x[0],
            f = x[1],
            g = (0, r.useState)(!0),
            v = (0, i.Z)(g, 2),
            k = v[0],
            A = v[1],
            I = (0, r.useState)(!0),
            P = (0, i.Z)(I, 2),
            q = (P[0], P[1]),
            _ = (0, r.useState)(!0),
            $ = (0, i.Z)(_, 2),
            ee = ($[0], $[1]),
            ne = (0, r.useState)([]),
            te = (0, i.Z)(ne, 2),
            ae = te[0],
            se = te[1],
            ie = (0, r.useState)([]),
            re = (0, i.Z)(ie, 2),
            ce = re[0],
            de = re[1],
            le = (0, r.useState)(!1),
            oe = (0, i.Z)(le, 2),
            ue = oe[0],
            pe = oe[1],
            me = (0, r.useState)(!1),
            he = (0, i.Z)(me, 2),
            je = he[0],
            xe = he[1],
            ye = (0, r.useState)(!1),
            be = (0, i.Z)(ye, 2),
            fe = be[0],
            ge = be[1],
            ve = (0, r.useState)(L.a6[0]),
            ke = (0, i.Z)(ve, 2),
            Ne = ke[0],
            Ae = ke[1],
            Ie = r.useRef(),
            we = (0, z.x)().chainId,
            Te = (0, E.u)(we, "StakingRaijins"),
            Ce = L.Hp.map(function (e) {
              return e.address;
            }),
            Re = (0, C.ZP)(s && Te && [s, we, Te, "getTokensInWallet", Ce], {
              fetcher: (0, O.z6)(c, U),
            }).data,
            Ze = (function (e, n) {
              return void 0 === e || 0 === e.length
                ? []
                : e
                    .map(function (e) {
                      for (var t = -1, a = 0; a < L.Hp.length; a++)
                        if (
                          L.Hp[a].address.toLowerCase() ===
                          e.token_address.toLowerCase()
                        ) {
                          t = a;
                          break;
                        }
                      if (-1 === t) return null;
                      var s = L.Hp[t],
                        i = "";
                      i =
                        "LIFE OF HEL - Volume 1" === s.name
                          ? ""
                              .concat(s.imageHash)
                              .concat(
                                L.BK[Number(e.token_id.toString()) - 1],
                                "."
                              )
                              .concat(s.imageType)
                          : ""
                              .concat(s.imageHash)
                              .concat(Number(e.token_id.toString()), ".")
                              .concat(s.imageType);
                      var r = (s.address, e.token_id.toString(), 0),
                        c = L.mf[r][n];
                      return {
                        id: e.token_id.toString(),
                        name: e.name,
                        address: s.address,
                        image: i,
                        rewards: c,
                      };
                    })
                    .filter(function (e) {
                      return null !== e;
                    });
            })(
              Re
                ? Re.filter(function (e) {
                    return (
                      e.token_address.toLowerCase() === Ne.address.toLowerCase()
                    );
                  })
                : [],
              m
            ),
            Se = (0, C.ZP)(s && Te && [s, we, Te, "getStakingInfo", Ce, o], {
              fetcher: (0, O.z6)(c, U),
            }).data,
            Me = (function (e) {
              return void 0 === e || 0 === e.length
                ? []
                : e
                    .map(function (e) {
                      for (var n = -1, t = 0; t < L.Hp.length; t++)
                        if (
                          L.Hp[t].address.toLowerCase() === e[0].toLowerCase()
                        ) {
                          n = t;
                          break;
                        }
                      if (-1 === n) return null;
                      var a = L.Hp[n],
                        s = parseInt(e[1].toString()),
                        i = parseInt(e[2].toString()),
                        r = parseInt(e[3].toString()),
                        c = e[4],
                        d = e[5],
                        l = parseInt((0, X.dN)(e[6], 18, 0)),
                        o = (a.address, 0),
                        u = r + 24 * H[i].period * 3600,
                        p = new Date().getTime() / 1e3,
                        m = 0,
                        h = 0;
                      c
                        ? ((m =
                            24 * H[i].period * 3600 -
                            ((p - r) % (24 * H[i].period * 3600))),
                          (h = L.mf[o][i]))
                        : d || p > u
                        ? ((m = 0), (h = 0))
                        : ((m = u - p), (h = L.mf[o][i]));
                      var j = "";
                      return (
                        (j =
                          "LIFE OF HEL - Volume 1" === a.name
                            ? ""
                                .concat(a.imageHash)
                                .concat(L.BK[Number(e[1].toString()) - 1], ".")
                                .concat(a.imageType)
                            : ""
                                .concat(a.imageHash)
                                .concat(Number(e[1].toString()), ".")
                                .concat(a.imageType)),
                        {
                          name: a.name,
                          image: j,
                          address: a.address,
                          id: s,
                          timeType: i,
                          leftTime: parseInt(m / 86400) + 1,
                          autoRestake: c,
                          nextTicket: h,
                          claimableTicket: l,
                        }
                      );
                    })
                    .filter(function (e) {
                      return null !== e;
                    });
            })(
              Se
                ? Se.filter(function (e) {
                    return (
                      e._address.toLowerCase() === Ne.address.toLowerCase()
                    );
                  })
                : []
            ),
            Ee = (0, C.ZP)(s && Te && [s, we, Te, "getApprovalStatus", Ce, o], {
              fetcher: (0, O.z6)(c, U),
            }).data,
            Le = !0;
          if (Ee) {
            Ee &&
              Ee.filter(function (e) {
                return (
                  e.token_address.toLowerCase() === Ne.address.toLowerCase()
                );
              });
            Le = !0;
          }
          var Oe = (0, r.useState)(!Le),
            ze = (0, i.Z)(Oe, 2),
            Fe = ze[0],
            Be = ze[1],
            De = function (e) {
              var n = Ze[e],
                t = K.find(function (e) {
                  return e.id === n.id && e.address === n.address.toLowerCase();
                });
              void 0 === t
                ? K.push({ id: n.id, address: n.address.toLowerCase() })
                : (K = K.filter(function (e) {
                    return e !== t;
                  }));
              for (
                var a = [],
                  s = function () {
                    var e = Ze[i];
                    void 0 ===
                    K.find(function (n) {
                      return (
                        n.id === e.id && n.address === e.address.toLowerCase()
                      );
                    })
                      ? a.push(!1)
                      : a.push(!0);
                  },
                  i = 0;
                i < Ze.length;
                i++
              )
                s();
              se(a), 0 !== K.length || Le ? Be(!1) : Be(!0);
            },
            We = function (e) {
              var n = Me[e],
                t = V.find(function (e) {
                  return e.id === n.id && e.address === n.address.toLowerCase();
                });
              void 0 === t
                ? V.push({ id: n.id, address: n.address.toLowerCase() })
                : (V = V.filter(function (e) {
                    return e !== t;
                  }));
              for (
                var a = [],
                  s = function () {
                    var e = Me[i];
                    void 0 ===
                    V.find(function (n) {
                      return (
                        n.id === e.id && n.address === e.address.toLowerCase()
                      );
                    })
                      ? a.push(!1)
                      : a.push(!0);
                  },
                  i = 0;
                i < Me.length;
                i++
              )
                s();
              de(a),
                0 === V.length
                  ? (f(!0), A(!0), q(!0), ee(!0))
                  : (f(!1), A(!1), q(!1), ee(!1));
            },
            Qe = function () {
              (K = []), se([]), Be(!0);
            },
            Ue = function () {
              (V = []), de([]), f(!0), A(!0), q(!0), ee(!0);
            },
            Ye = function () {
              Le &&
                (function (e) {
                  var n = e.setIsApproving,
                    t = e.library,
                    a = e.tokenAddress,
                    s = e.spender,
                    i = e.chainId,
                    r = e.onApproveSubmitted,
                    c = e.pendingTxns,
                    d = e.setPendingTxns,
                    l = e.includeMessage;
                  n(!0),
                    new R.CH(a, B, t.getSigner())
                      .setApprovalForAll(s, !0)
                      .then(
                        (function () {
                          var e = (0, T.Z)(
                            (0, w.Z)().mark(function e(n) {
                              var t, a;
                              return (0, w.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (t = (0, D.jY)(i) + "tx/" + n.hash),
                                        W.U.success(
                                          (0, y.jsxs)("div", {
                                            children: [
                                              "Approval submitted! ",
                                              (0, y.jsx)(Q.Z, {
                                                href: t,
                                                children: "View status.",
                                              }),
                                              (0, y.jsx)("br", {}),
                                            ],
                                          })
                                        ),
                                        r && r(),
                                        c &&
                                          d &&
                                          ((a = {
                                            hash: n.hash,
                                            message:
                                              !!l && "Raijins NFT Approved!",
                                          }),
                                          d([].concat((0, F.Z)(c), [a])));
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (n) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )
                      .catch(function (e) {
                        var n, t, a;
                        console.error(e),
                          (a = [
                            "not enough funds for gas",
                            "failed to execute call with revert code InsufficientGasFunds",
                          ].includes(
                            null === (n = e.data) || void 0 === n
                              ? void 0
                              : n.message
                          )
                            ? (0, y.jsxs)("div", {
                                children: [
                                  "There is not enough MATIC in your account on Polygon to send this transaction.",
                                  (0, y.jsx)("br", {}),
                                  (0, y.jsx)("br", {}),
                                  (0, y.jsx)(Q.Z, {
                                    href: "https://www.mexc.com/",
                                    children: "Bridge MATIC to Polygon",
                                  }),
                                ],
                              })
                            : null !== (t = e.message) &&
                              void 0 !== t &&
                              t.includes("User denied transaction signature")
                            ? "Approval was cancelled"
                            : "Approval failed"),
                          W.U.error(a);
                      })
                      .finally(function () {
                        n(!1);
                      });
                })({
                  setIsApproving: pe,
                  library: c,
                  tokenAddress: Ne.address,
                  spender: Te,
                  chainId: we,
                  onApproveSubmitted: function () {
                    xe(!0);
                  },
                });
            };
          return (
            (0, r.useEffect)(
              function () {
                Le && xe(!1);
              },
              [Le, s]
            ),
            (0, r.useEffect)(
              function () {
                Qe(), Ue();
              },
              [Ne]
            ),
            (0, y.jsxs)("div", {
              className: d()("raijins-staking"),
              children: [
                (0, y.jsxs)(l.Z, {
                  classes: "mb-3",
                  children: [
                    "Raijins ",
                    (0, y.jsx)("span", { children: "staking" }),
                  ],
                }),
                (0, y.jsx)(G.Z, {
                  ref: Ie,
                  options: L.a6,
                  value: Ne,
                  onChange: function (e) {
                    return Ae(e);
                  },
                }),
                (0, y.jsxs)(Z.mQ, {
                  className: d()("raijins-staking-tabs"),
                  children: [
                    (0, y.jsxs)(Z.td, {
                      children: [
                        (0, y.jsx)(Z.OK, {
                          children: (0, y.jsxs)("p", {
                            children: [
                              (0, y.jsx)("span", {
                                children: Ze ? Ze.length : 0,
                              }),
                              " in wallet",
                            ],
                          }),
                        }),
                        (0, y.jsx)(Z.OK, {
                          children: (0, y.jsxs)("p", {
                            children: [
                              (0, y.jsx)("span", {
                                children: Me ? Me.length : 0,
                              }),
                              " staked",
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, y.jsxs)(Z.x4, {
                      children: [
                        n
                          ? (0, y.jsx)("div", {
                              className: d()("cards-wrapper", "mb-5"),
                              children:
                                Ze && Ze.length
                                  ? Ze.map(function (e, n) {
                                      return (0,
                                      y.jsx)(Y, { nft: e, timeTypeInfo: H, currentTimeType: m, index: n, selectStatusInWallet: ae, handleSelectNFTInWallet: De }, n);
                                    })
                                  : (0, y.jsx)("div", {
                                      className: d()(
                                        "p-1",
                                        "text-center",
                                        "text-danger"
                                      ),
                                      children: "No NFTs in wallet",
                                    }),
                            })
                          : (0, y.jsx)("div", {
                              className: d()("table-wrapper", "mb-5"),
                              children: (0, y.jsxs)("table", {
                                children: [
                                  (0, y.jsx)("thead", {
                                    children: (0, y.jsxs)("tr", {
                                      rowSpan: Ze ? Ze.length + 1 : 0,
                                      children: [
                                        (0, y.jsx)("th", {
                                          children: "nft visual",
                                        }),
                                        (0, y.jsx)("th", { children: "nft #" }),
                                        (0, y.jsx)("th", {
                                          children: "selected",
                                        }),
                                        (0, y.jsx)("th", {
                                          children: "staking period",
                                        }),
                                        (0, y.jsx)("th", {
                                          children: "estimated reward",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, y.jsx)("tbody", {
                                    children:
                                      Ze && Ze.length
                                        ? Ze.map(function (e, n) {
                                            return (0, y.jsxs)(
                                              "tr",
                                              {
                                                children: [
                                                  (0, y.jsx)("td", {
                                                    className: "nft-visual",
                                                    children: (0, y.jsx)(
                                                      "img",
                                                      {
                                                        src: e.image,
                                                        alt: "".concat(e.image),
                                                      }
                                                    ),
                                                  }),
                                                  (0, y.jsxs)("td", {
                                                    className: "w-20",
                                                    children: [
                                                      e.name,
                                                      " #",
                                                      e.id,
                                                    ],
                                                  }),
                                                  (0, y.jsx)("td", {
                                                    children: (0, y.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "raijins-checkbox",
                                                        children: [
                                                          (0, y.jsx)("input", {
                                                            type: "checkbox",
                                                            id: "raijinsCheckbox-".concat(
                                                              n
                                                            ),
                                                            checked:
                                                              !0 === ae[n],
                                                            onChange:
                                                              function () {
                                                                return De(n);
                                                              },
                                                            value: ae[n],
                                                          }),
                                                          (0, y.jsx)("label", {
                                                            htmlFor:
                                                              "raijinsCheckbox-".concat(
                                                                n
                                                              ),
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, y.jsxs)("td", {
                                                    className: "days",
                                                    children: [
                                                      (0, y.jsx)("span", {
                                                        className:
                                                          "text-primary",
                                                        children: H[m].period,
                                                      }),
                                                      " ",
                                                      "day",
                                                    ],
                                                  }),
                                                  (0, y.jsxs)("td", {
                                                    children: [
                                                      (0, y.jsx)("span", {
                                                        className:
                                                          "text-primary",
                                                        children: e.rewards,
                                                      }),
                                                      " ",
                                                      "raijins tickets",
                                                    ],
                                                  }),
                                                ],
                                              },
                                              e.id
                                            );
                                          })
                                        : (0, y.jsx)("tr", {
                                            children: (0, y.jsx)("td", {
                                              colSpan: 6,
                                              className: d()(
                                                "text-danger",
                                                "text-center",
                                                "p-1"
                                              ),
                                              children: "No NFTs in wallet",
                                            }),
                                          }),
                                  }),
                                ],
                              }),
                            }),
                        (0, y.jsxs)("div", {
                          className: "btn-group",
                          children: [
                            (0, y.jsx)("button", {
                              className: d()("select-all-btn"),
                              onClick: function () {
                                var e = [];
                                K = [];
                                for (var n = 0; n < Ze.length; n++) {
                                  var t = Ze[n];
                                  K.push({
                                    id: t.id,
                                    address: t.address.toLowerCase(),
                                  }),
                                    e.push(!0);
                                }
                                se(e), Be(!1);
                              },
                              children: "select all",
                            }),
                            (0, y.jsx)(
                              N.Z,
                              {
                                text:
                                  Le && je
                                    ? "Waiting for Approval..."
                                    : ue
                                    ? "Approving"
                                    : Le
                                    ? "Approve"
                                    : fe
                                    ? "Staking..."
                                    : "Stake",
                                variant: "primary",
                                disabled: Fe,
                                onBtnClick: function () {
                                  if (Le) Ye();
                                  else {
                                    ge(!0);
                                    var e = K.map(function (e) {
                                        return e.address;
                                      }),
                                      n = K.map(function (e) {
                                        return e.id;
                                      }),
                                      t = n.map(function (e) {
                                        return m;
                                      }),
                                      a = new R.CH(Te, U, c.getSigner());
                                    (0, O.HV)(we, a, "stake", [e, n, t], {
                                      sentMsg: "Staking Filip NFT submitted!",
                                      failMsg: "Staking Filip NFT failed.",
                                    })
                                      .then(
                                        (function () {
                                          var e = (0, T.Z)(
                                            (0, w.Z)().mark(function e(n) {
                                              return (0, w.Z)().wrap(function (
                                                e
                                              ) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              },
                                              e);
                                            })
                                          );
                                          return function (n) {
                                            return e.apply(this, arguments);
                                          };
                                        })()
                                      )
                                      .finally(function () {
                                        ge(!1);
                                      }),
                                      Qe();
                                  }
                                },
                              },
                              "stake"
                            ),
                            H.map(function (e, n) {
                              return (0, y.jsx)(
                                N.Z,
                                {
                                  text: e.label,
                                  variant: m === n ? "danger" : "transparent",
                                  onBtnClick: function () {
                                    return (function (e) {
                                      h(e);
                                    })(n);
                                  },
                                },
                                e.id
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsxs)(Z.x4, {
                      children: [
                        n
                          ? (0, y.jsx)("div", {
                              className: d()("cards-wrapper", "mb-5"),
                              children:
                                Me && Me.length
                                  ? Me.map(function (e, n) {
                                      return (0,
                                      y.jsx)(J, { nft: e, index: n, selectStatusStaked: ce, handleSelectNFTStaked: We, timeTypeInfo: H });
                                    })
                                  : (0, y.jsx)("div", {
                                      className: d()(
                                        "p-1",
                                        "text-center",
                                        "text-danger"
                                      ),
                                      children: "No NFTs in wallet",
                                    }),
                            })
                          : (0, y.jsx)("div", {
                              className: d()("table-wrapper", "mb-5"),
                              children: (0, y.jsxs)("table", {
                                children: [
                                  (0, y.jsx)("thead", {
                                    children: (0, y.jsxs)("tr", {
                                      rowSpan: Me ? Me.length + 1 : 0,
                                      children: [
                                        (0, y.jsx)("th", {
                                          children: "nft visual",
                                        }),
                                        (0, y.jsx)("th", { children: "nft #" }),
                                        (0, y.jsx)("th", {
                                          children: "selected",
                                        }),
                                        (0, y.jsx)("th", {
                                          children: "auto-restake",
                                        }),
                                        (0, y.jsx)("th", {
                                          children: "remaining period",
                                        }),
                                        (0, y.jsx)("th", {
                                          children: "rewards",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, y.jsx)("tbody", {
                                    children:
                                      Me && Me.length
                                        ? Me.map(function (e, n) {
                                            return (0, y.jsxs)(
                                              "tr",
                                              {
                                                children: [
                                                  (0, y.jsx)("td", {
                                                    className: "nft-visual",
                                                    children: (0, y.jsx)(
                                                      "img",
                                                      {
                                                        src: e.image,
                                                        alt: "".concat(e.image),
                                                      }
                                                    ),
                                                  }),
                                                  (0, y.jsxs)("td", {
                                                    className: "w-20",
                                                    children: [
                                                      e.name,
                                                      " #",
                                                      e.id,
                                                    ],
                                                  }),
                                                  (0, y.jsx)("td", {
                                                    children: (0, y.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "raijins-checkbox",
                                                        children: [
                                                          (0, y.jsx)("input", {
                                                            type: "checkbox",
                                                            id: "raijinsCheckbox-".concat(
                                                              n
                                                            ),
                                                            checked:
                                                              !0 === ce[n],
                                                            onClick:
                                                              function () {
                                                                return We(n);
                                                              },
                                                            value: ce[n],
                                                          }),
                                                          (0, y.jsx)("label", {
                                                            htmlFor:
                                                              "raijinsCheckbox-".concat(
                                                                n
                                                              ),
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, y.jsx)("td", {
                                                    children: (0, y.jsx)(
                                                      "button",
                                                      {
                                                        className:
                                                          d()(
                                                            "auto-restake-btn"
                                                          ),
                                                        children: (0, y.jsx)(
                                                          "img",
                                                          {
                                                            src:
                                                              !0 ===
                                                              e.autoRestake
                                                                ? S
                                                                : M,
                                                            alt: "arrow.png",
                                                            width: "100%",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, y.jsxs)("td", {
                                                    className: "days",
                                                    children: [
                                                      (0, y.jsx)("span", {
                                                        className:
                                                          "text-primary",
                                                        children: e.leftTime,
                                                      }),
                                                      " ",
                                                      "days left",
                                                      (0, y.jsx)("br", {}),
                                                      (0, y.jsxs)("span", {
                                                        className:
                                                          "text-danger",
                                                        children: [
                                                          "(",
                                                          H[e.timeType].period,
                                                          " days programme)",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, y.jsxs)("td", {
                                                    children: [
                                                      (0, y.jsxs)("div", {
                                                        className: "mb-2",
                                                        children: [
                                                          (0, y.jsx)("span", {
                                                            className:
                                                              "text-primary",
                                                            children:
                                                              "next reward:",
                                                          }),
                                                          (0, y.jsx)("br", {}),
                                                          (0, y.jsx)("span", {
                                                            className:
                                                              "text-danger",
                                                            children:
                                                              e.nextTicket,
                                                          }),
                                                          " raijins tickets",
                                                        ],
                                                      }),
                                                      (0, y.jsxs)("div", {
                                                        children: [
                                                          (0, y.jsx)("span", {
                                                            className:
                                                              "text-primary",
                                                            children:
                                                              "claimable reward:",
                                                          }),
                                                          (0, y.jsx)("br", {}),
                                                          (0, y.jsx)("span", {
                                                            className:
                                                              "text-danger",
                                                            children:
                                                              e.claimableTicket,
                                                          }),
                                                          " raijins tickets",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              e.id
                                            );
                                          })
                                        : (0, y.jsx)("tr", {
                                            children: (0, y.jsx)("td", {
                                              colSpan: 6,
                                              className: d()(
                                                "text-danger",
                                                "text-center",
                                                "p-1"
                                              ),
                                              children: "No staked NFTs",
                                            }),
                                          }),
                                  }),
                                ],
                              }),
                            }),
                        (0, y.jsxs)("div", {
                          className: "btn-group",
                          children: [
                            (0, y.jsx)("button", {
                              className: d()("select-all-btn"),
                              onClick: function () {
                                var e = [];
                                V = [];
                                for (var n = 0; n < Me.length; n++) {
                                  var t = Me[n];
                                  V.push({
                                    id: t.id,
                                    address: t.address.toLowerCase(),
                                  }),
                                    e.push(!0);
                                }
                                de(e), f(!1), A(!1), q(!1), ee(!1);
                              },
                              children: "select all",
                            }),
                            (0, y.jsx)(
                              N.Z,
                              {
                                text: "claim rewards",
                                variant: "transparent",
                                disabled: b,
                                onBtnClick: function () {
                                  var e = V.map(function (e) {
                                      return e.address;
                                    }),
                                    n = V.map(function (e) {
                                      return e.id;
                                    }),
                                    t = new R.CH(Te, U, c.getSigner());
                                  (0, O.HV)(we, t, "claimRewards", [e, n], {
                                    sentMsg: "Claim Raijins Ticket submitted!",
                                    failMsg: "Claim Raijins Ticket failed.",
                                  })
                                    .then(
                                      (function () {
                                        var e = (0, T.Z)(
                                          (0, w.Z)().mark(function e(n) {
                                            return (0, w.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e);
                                          })
                                        );
                                        return function (n) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                    .finally(function () {}),
                                    Ue();
                                },
                              },
                              "claim"
                            ),
                            (0, y.jsx)(
                              N.Z,
                              {
                                text: "unstake",
                                variant: "transparent",
                                disabled: k,
                                onBtnClick: function () {
                                  var e = V.map(function (e) {
                                      return e.address;
                                    }),
                                    n = V.map(function (e) {
                                      return e.id;
                                    }),
                                    t = new R.CH(Te, U, c.getSigner());
                                  (0, O.HV)(we, t, "unStake", [e, n], {
                                    sentMsg: "Unstake Raijins NFT submitted!",
                                    failMsg: "Unstake Raijins NFT failed.",
                                  })
                                    .then(
                                      (function () {
                                        var e = (0, T.Z)(
                                          (0, w.Z)().mark(function e(n) {
                                            return (0, w.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e);
                                          })
                                        );
                                        return function (n) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                    .finally(function () {}),
                                    Ue();
                                },
                              },
                              "unstake"
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        q = function (e) {
          var n = e.options,
            t = e.handleChange;
          return (0, y.jsx)("div", {
            className: d()("raijins-select-container"),
            children: (0, y.jsx)("label", {
              children: (0, y.jsx)("select", {
                className: d()("raijins-select"),
                onChange: t,
                children:
                  n &&
                  n.length &&
                  n.map(function (e) {
                    return (0,
                    y.jsx)("option", { value: e.value, children: e.text }, e.value);
                  }),
              }),
            }),
          });
        },
        _ = t.p + "static/media/Arrow1.8660bdf67e641533bec2.png",
        $ = [
          { key: "raijins nft type", options: [{ value: 0, text: "raijins" }] },
          {
            key: "staking duration",
            options: [
              { value: 0, text: "7-day" },
              { value: 1, text: "30-day" },
              { value: 2, text: "60-day" },
              { value: 3, text: "90-day" },
            ],
          },
        ],
        ee = function (e) {
          var n = e.isMobile,
            t = (0, r.useState)(0),
            a = (0, i.Z)(t, 2),
            s = a[0],
            c = a[1],
            o = (0, r.useState)(0),
            p = (0, i.Z)(o, 2),
            m = p[0],
            h = p[1],
            j = (0, r.useState)(0),
            x = (0, i.Z)(j, 2),
            b = x[0],
            f = x[1];
          return (0, y.jsxs)("div", {
            className: d()("reward-calculator", "mb-7"),
            children: [
              (0, y.jsxs)(l.Z, {
                classes: "mb-3",
                children: [
                  "staking reward ",
                  (0, y.jsx)("span", { children: "calculator" }),
                ],
              }),
              (0, y.jsx)(v.Z, {
                classes: d()("text-center", "mb-5"),
                children:
                  "Please use the below tool to estimate the amount of Raijins Tickets awarded based on your staking criteria",
              }),
              (0, y.jsx)("div", {
                className: d()(
                  "d-flex",
                  "justify-between",
                  "gap-1",
                  "mb-5",
                  n ? "flex-column" : "flex-row"
                ),
                children: $.map(function (e, n) {
                  return (0, y.jsx)(
                    q,
                    {
                      options: e.options,
                      handleChange:
                        0 === n
                          ? function (e) {
                              return (function (e) {
                                h(e);
                              })(e.target.value);
                            }
                          : function (e) {
                              return (function (e) {
                                f(e);
                              })(e.target.value);
                            },
                    },
                    e.key
                  );
                }),
              }),
              (0, y.jsx)("div", {
                className: d()("text-center", "mb-6"),
                children: (0, y.jsx)(N.Z, {
                  variant: "primary",
                  text: "calculate rewards",
                  onBtnClick: function () {
                    c(L.mf[m][b]);
                  },
                }),
              }),
              (0, y.jsxs)("div", {
                className: d()("result-container", "mb-3"),
                children: [
                  (0, y.jsx)("img", { src: _, alt: "arrow.png" }),
                  (0, y.jsx)("div", { className: d()("result"), children: s }),
                  (0, y.jsx)("img", { src: _, alt: "arrow.png" }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "raijins-tickets-container",
                children: [
                  (0, y.jsx)("h5", {
                    className: "title",
                    children: "raijins tickets",
                  }),
                  (0, y.jsx)("img", { src: u, alt: "raijins-ticket.png" }),
                ],
              }),
            ],
          });
        },
        ne = function (e) {
          var n = e.children;
          return (0, y.jsx)("div", {
            className: d()("staking-container"),
            children: n,
          });
        },
        te = t.p + "static/media/NiQuiz.6e6316409cfb805eaf31.png",
        ae = t(1107),
        se = function (e) {
          var n = e.isMobile;
          return (0, y.jsxs)("div", {
            className: d()("staking-desc"),
            children: [
              (0, y.jsx)("div", {
                className: d()("staking-desc-img-container"),
                children: (0, y.jsx)("img", {
                  src: te,
                  alt: "NiQuiz.png",
                  width: "100%",
                }),
              }),
              (0, y.jsxs)("div", {
                className: d()("staking-description-container"),
                children: [
                  (0, y.jsx)(v.Z, {
                    classes: "text-center mb-5",
                    children:
                      "Once staked, each Raijins NFTs will provide you with Raijins Tickets. Amount of Raijins Tickets earned will change based on the staking period length and type of Raijins NFTs staked.",
                  }),
                  (0, y.jsxs)("div", {
                    className: d()(
                      "d-flex",
                      "justify-center",
                      "align-center",
                      "gap-2",
                      "mb-5"
                    ),
                    children: [
                      (0, y.jsxs)("h5", {
                        className: d()("text-center", "section-title"),
                        children: [
                          "raijins nfts ",
                          (0, y.jsx)("span", {
                            className: d()("text-danger"),
                            children: "staking",
                          }),
                        ],
                      }),
                      (0, y.jsx)("img", {
                        src: _,
                        alt: "arrow.png",
                        width: n ? "40px" : "80px",
                      }),
                      (0, y.jsx)("img", {
                        src: u,
                        alt: "raijins-ticket.png",
                        width: n ? "100px" : "200px",
                      }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className: d()(
                      "d-flex",
                      "justify-between",
                      "align-center",
                      "gap-2"
                    ),
                    children: [
                      (0, y.jsx)("img", {
                        src: ae,
                        alt: "danger-keep-out.png",
                        width: "40px",
                        className: n ? "d-none" : "d-block",
                      }),
                      (0, y.jsx)("div", {
                        children: (0, y.jsx)("p", {
                          className: d()("reward-boost-desc", "text-primary"),
                          children:
                            "Raijins Tickets will be awarded at the end of each staking period. Awarded Raijins Tickets can be claimed at anytime by pressing either the \u201cCLAIM REWARDS\u201d or the \u201cUNSTAKE\u201d buttons \u2013 the latter will also unstake your Raijins NFTs. Staking can be undone at any moment; however, pending Raijins Tickets will be automatically forfeit",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ie = t(9170),
        re = function (e) {
          var n = e.connectWallet,
            t = (0, a.Ge)(),
            i = t.active,
            r =
              (t.library,
              t.account,
              (0, ie.ac)("only screen and (max-width: 640px)"));
          return (0, y.jsx)(s.Z, {
            children: (0, y.jsx)(ne, {
              children: i
                ? (0, y.jsx)(P, { isMobile: r })
                : (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)(I, { connectWallet: n }),
                      (0, y.jsx)(se, { isMobile: r }),
                      (0, y.jsx)(g, { isMobile: r }),
                      (0, y.jsx)(ee, { isMobile: r }),
                    ],
                  }),
            }),
          });
        };
    },
    6978: function (e, n, t) {
      e.exports = t.p + "static/media/RaijinsTicket.f8c3bf16082bb0ddaa82.png";
    },
    1107: function (e, n, t) {
      e.exports = t.p + "static/media/DangerKeepOut.1e92631934e4ee6ea562.png";
    },
  },
]);
//# sourceMappingURL=154.0e6a22da.chunk.js.map
