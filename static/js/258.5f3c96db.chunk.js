"use strict";
(self.webpackChunkraijins_fronend =
  self.webpackChunkraijins_fronend || []).push([
  [258],
  {
    5514: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(1694),
        a = n.n(i),
        r = n(184),
        s = function (e) {
          var t = e.children,
            n = e.classes;
          return (0, r.jsx)("p", {
            className: a()("description", n),
            children: t,
          });
        };
    },
    4731: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(1087),
        a = n(1694),
        r = n.n(a),
        s = n(4373),
        l = n(184),
        p = function () {
          return (0, l.jsxs)("button", {
            className: r()("back-to-top-btn"),
            onClick: function () {
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            children: [(0, l.jsx)(s.yTe, {}), " back to top"],
          });
        },
        o = n.p + "static/media/NinetailsLogo.6d32e0e230ece5c2d7cd.png",
        u = function () {
          return (0, l.jsxs)("div", {
            className: r()("footer"),
            children: [
              (0, l.jsxs)("p", {
                className: r()("slogan"),
                children: [
                  "we are ",
                  (0, l.jsx)("span", { children: "inevitable!" }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: r()("links"),
                children: [
                  (0, l.jsxs)("div", {
                    className: r()("copyright"),
                    children: [
                      "\xa9 2023 by nine tails ink",
                      " ",
                      (0, l.jsx)("img", { src: o, alt: "nine-tails-ink" }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: r()("mail-container"),
                    children: (0, l.jsx)(i.rU, {
                      to: "/",
                      children: "hello@lifeofhel.xyz",
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: r()("back-to-top-container"),
                    children: (0, l.jsx)(p, {}),
                  }),
                ],
              }),
            ],
          });
        },
        c = (n(1470), n(2895)),
        d = function (e) {
          var t = e.children;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("main", { children: t }),
              (0, l.jsx)(c.Z, {}),
              (0, l.jsx)(u, {}),
            ],
          });
        };
    },
    4690: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(1694),
        a = n.n(i),
        r = n(184),
        s = function (e) {
          var t = e.children,
            n = e.classes;
          return (0, r.jsx)("h1", {
            className: a()("page-title", n),
            children: t,
          });
        };
    },
    2702: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(1694),
        a = n.n(i),
        r = n(9146),
        s = n(1087),
        l = n(2791),
        p = n(8029),
        o = n(3605),
        u = n(184),
        c = function (e) {
          var t = e.text,
            n = e.classes;
          return (0, u.jsx)(p.CopyToClipboard, {
            text: t,
            onCopy: function () {
              return o.U.success(
                (0, u.jsx)("p", {
                  children: "Address copied to your clipboard",
                })
              );
            },
            children: (0, u.jsx)("button", {
              className: a()("copy-btn", n),
              children: (0, u.jsx)("img", {
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAYAAAAeYmHpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTEyLTE2VDE0OjM4OjQxKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0xMi0xOFQxODo0OToyNiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0xMi0xOFQxODo0OToyNiswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZDc5NTVlZC1jYTAzLWU3NDUtODhjYy1kMDEzYmQ3MDBmNjEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplOTdmYmY0Ny1lNTg0LTc5NGItODcwNC0xZDRhYzVjNzU1MjIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NmU0OTkxYS04YTFiLWYwNGItYTNjMS1iMmY3ZDliMjk4NWUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2ZTQ5OTFhLThhMWItZjA0Yi1hM2MxLWIyZjdkOWIyOTg1ZSIgc3RFdnQ6d2hlbj0iMjAyMy0xMi0xNlQxNDozODo0MSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRkNzk1NWVkLWNhMDMtZTc0NS04OGNjLWQwMTNiZDcwMGY2MSIgc3RFdnQ6d2hlbj0iMjAyMy0xMi0xOFQxODo0OToyNiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn34QSwAAASaSURBVGiB7Zs/TBtXHMd/vHv2uxzns8+5M9gmh0AYtSCmKurggarpECkIdaBLO2aIMkZBajYyMrRSu1SCDl0jJQMDAxOIwVKjzo0QQygEYoiMrTsb/32YDNiIwB3EvXfnE/ZnvN/p997X997z+/1+7/WcnJzARURRGguGbk8Two8QXvji0gsOQmvVdKVc2iwU9FXDyK1RSuus2+g5L1oQerVIX/zJLSFwFwCSrBtrlfoxXdlPv3uu69nXLP2eiRaEXu2ONrKAOHyfZQMMSBl6dnlvd2uelUME4GnBAABJKRieUpT+71k5xAAAkb74E48KbpJU++JACL9eqZRzdp0hUZTGGnPY6yQVNfqIhSMcDN2eButFK3WU19crldIGi8auA3GcKIrBb7HPP2NmF0VpEgBsz21MCD9iYUttb238WCwe7dhtpKUOYbygDSYWCS88vGhDHA4IQq9mt0/I6n/4KK+vuy0YAIBSWj/MHPxpYU4ixIl220BWBreGtBnHxzQPACkTk9mzlrEU3U4KBeMNrVXTF5/TWjVdKBhv7PrHdh04xd7u26fxgWHAPn8U4FTw3u7bpyx8e1Z0Yz35QRB6NYQ4kcUXbuJZ0U2cWEw9OaedpiNFOz68CeFlX2MxcotyubhxVRzuiGhCeFlRo49EUZocHhkPgPuxeSoxOpEuFPTV7OGHFxeDFOaiozHt8fDI+E/Q3iREEvv8EJLVGUmSpxWlfyGT2V9qGpnO6fjA0LOQrLZb8CcgDt9X++Kz8YGhZ2fPWDmPxrTHUjA8BR4SfI6kFAxPhcPqPQBGognhZa99YROSaiQ2izFGTEQ3gnsvCwaA06EeCinTTBayRnBvSqmYPzL03Fy1WvmXRVvX4feT8ZCs/EJ4wdQuBqRJ26IJ4eXG39IlSsX80X9bm7bj3xZZwRj/PjT8ZQ37/JeMt4TAXdvDu7HxMB3ahp6bs+v//0AppYae/cvK7ug21K0h3Soduffuiu4UuqI7ha7oTqEr+jzY54+72RE3QWaVBAAAQRC/whjfyJGAKuXSppkB+/wz2mBiMRgMfy2K0pjbHXMSVCjoq1ZGwgsPYwNDf98ZTCwmRideCkKv5mbnnAIZRm6tfkxXrnkviX3+mfjA8K+u9MphEKW0vp9+9xw+owyKff7oTRjqCABA17OvDT27DIzqv17nLHOyt7s1ryj9G2pfHMAiKcCqPtxuPkkXZTL7S4Tw683qBOJwszqRqh/TPKv6cLu5lCNrlEDmAWC+WRsGOD0d4HbnnOLKxGA7Dtq4wY3ccV1HV3Sn0BXdKXRFs4bnhW+c9H8ViOMilja7zsvl4gZY7NmloPwzxtj1s2oYYyxJ8gMre4/ZbZ1WSYxOvLQ6o01rVbiqmMYaxHERSZIfIM78ty4V878xER2NaY9DsvqHbUcucJDe+Y7JnM4efnjxGYmItkNr1VeGkVtjIrpSKecOMwcL4O14PJV+vz1HKa0zW70zmf0lDyciUgfpnblmpMhkTp8nHFbvqZHYrFeuPNFa9VX6/fbc+dCYuWgAAIwxCoWUaTEgTbbr+lOpmP/H0HPLZvc1PwIAUJ7ynQRXiwAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC",
                alt: "Copy user address",
                width: "16px",
              }),
            }),
          });
        },
        d = function (e) {
          var t = e.raffle,
            n = e.isWalletConnected,
            i = e.connectWallet,
            p = e.onActionBtn,
            o = e.isTopRaffles,
            d = (0, l.useMemo)(
              function () {
                return (
                  (e = t.winner).substring(0, 5) +
                  "..." +
                  e.substring(e.length - 3)
                );
                var e;
              },
              [t.winner]
            );
          return (0, u.jsxs)("div", {
            className: a()("raffle-card"),
            children: [
              (0, u.jsx)("div", {
                className: a()("card-media"),
                children: (0, u.jsx)("img", {
                  src: "".concat(t.image),
                  alt: t.image,
                  width: "100%",
                }),
              }),
              (0, u.jsxs)("div", {
                className: a()("card-content"),
                children: [
                  (0, u.jsx)("h5", {
                    className: a()("title"),
                    title: t.title,
                    children: t.title,
                  }),
                  (0, u.jsxs)("div", {
                    className: a()("content"),
                    children: [
                      (0, u.jsxs)("p", {
                        className: a()("value"),
                        children: ["value: ", t.value ? t.value : "Not set!"],
                      }),
                      t.ended
                        ? (0, u.jsx)(u.Fragment, {
                            children: t.decided
                              ? (0, u.jsxs)(u.Fragment, {
                                  children: [
                                    (0, u.jsxs)("p", {
                                      className: a()("winner", "text-center"),
                                      children: [
                                        "\ud83c\udfc6 winner: ",
                                        d,
                                        (0, u.jsx)(c, {
                                          text: t.winner,
                                          classes: "ml-05",
                                        }),
                                      ],
                                    }),
                                    (0, u.jsxs)("p", {
                                      className: a()(
                                        "remaining-time",
                                        "text-center"
                                      ),
                                      children: [
                                        "next raffle: ",
                                        (0, u.jsx)("br", {}),
                                        t.remainingTimeNextRaffle.days,
                                        "D",
                                        " ",
                                        t.remainingTimeNextRaffle.hours,
                                        "H ",
                                        t.remainingTimeNextRaffle.minutes,
                                        "M",
                                      ],
                                    }),
                                  ],
                                })
                              : (0, u.jsx)("p", {
                                  className: a()("winner", "text-center"),
                                  children:
                                    "\ud83c\udfc6 winner: waiting result...",
                                }),
                          })
                        : (0, u.jsxs)(u.Fragment, {
                            children: [
                              n
                                ? (0, u.jsxs)(u.Fragment, {
                                    children: [
                                      (0, u.jsx)("p", {
                                        className: a()("winning-rate"),
                                        children: "1x ticket winning rate:",
                                      }),
                                      (0, u.jsxs)("p", {
                                        className: a()(
                                          "winning-rate-percentage"
                                        ),
                                        children: [t.winningRate1x, "%"],
                                      }),
                                      (0, u.jsx)("p", {
                                        className: a()("winning-rate"),
                                        children: "your winning rate:",
                                      }),
                                      (0, u.jsxs)("p", {
                                        className: a()(
                                          "winning-rate-percentage"
                                        ),
                                        children: [t.winningRate, "%"],
                                      }),
                                    ],
                                  })
                                : (0, u.jsxs)(u.Fragment, {
                                    children: [
                                      (0, u.jsx)("p", {
                                        className: a()("winning-rate"),
                                        children: "1x ticket winning rate:",
                                      }),
                                      (0, u.jsxs)("p", {
                                        className: a()(
                                          "winning-rate-percentage"
                                        ),
                                        children: [t.winningRate1x, "%"],
                                      }),
                                    ],
                                  }),
                              (0, u.jsx)("p", {
                                className: a()("winner"),
                                children: "\ud83c\udfc6 winner: 1",
                              }),
                              (0, u.jsxs)("p", {
                                className: a()("remaining-time"),
                                children: [
                                  t.remainingTime.days,
                                  "D ",
                                  t.remainingTime.hours,
                                  "H ",
                                  t.remainingTime.minutes,
                                  "M left",
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              }),
              o
                ? (0, u.jsx)(u.Fragment, {
                    children: (0, u.jsx)("div", {
                      className: a()("card-action"),
                      children: (0, u.jsx)(s.rU, {
                        to: "/raffles",
                        className: "round-btn primary",
                        children: "Explore",
                      }),
                    }),
                  })
                : (0, u.jsx)(u.Fragment, {
                    children: t.ended
                      ? null
                      : n
                      ? (0, u.jsx)("div", {
                          className: a()("card-action"),
                          children: (0, u.jsx)(r.Z, {
                            variant: "danger",
                            text: "buy raffle",
                            onBtnClick: function () {
                              return p(t.id);
                            },
                          }),
                        })
                      : (0, u.jsx)("div", {
                          className: a()("card-action"),
                          children: (0, u.jsx)(r.Z, {
                            variant: "danger",
                            text: "connect wallet",
                            onBtnClick: i,
                          }),
                        }),
                  }),
            ],
          });
        };
    },
    5785: function (e, t, n) {
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var i = [
        {
          id: 0,
          image: n.p + "static/media/Raffle0.a0cfb5f571ed6ca55b75.png",
          title: "MATIC GOLD CHEST",
        },
        {
          id: 1,
          image: n.p + "static/media/Raffle1.3e44e25d41d07e4d6888.png",
          title: "MATIC SILVER CHEST",
        },
        {
          id: 2,
          image: n.p + "static/media/Raffle2.dd7db3b8405967e61cc2.png",
          title: "MATIC BRONZE CHEST",
        },
        {
          id: 3,
          image: n.p + "static/media/Raffle3.1f058e88ee3583be3342.png",
          title: "Filip TICKETS - RANDOM BOX",
        },
        {
          id: 4,
          image: n.p + "static/media/Raffle4.2c3b2a22697e7d183486.png",
          title: "NFTS - other collections",
        },
        {
          id: 5,
          image: n.p + "static/media/Raffle5.48025c84b5549a6a2e14.png",
          title: "Raijins custom - 1/1 (any collection)",
        },
        {
          id: 6,
          image: n.p + "static/media/Raffle6.e970b3367a24e9ca169a.png",
          title: "Raijins custom - 1/1 (coloured reaper)",
        },
        {
          id: 7,
          image: n.p + "static/media/Raffle7.a6dfa6d61eb17118169e.png",
          title: "Raijins - Volume 1 (First Edition)",
        },
        {
          id: 8,
          image: n.p + "static/media/Raffle8.2f99ddd2b3ad9406c6bc.png",
          title: "Raijins - Volume 1 (Tamahagane Edition)",
        },
        {
          id: 9,
          image: n.p + "static/media/Raffle9.cace8bea1c810ce95d24.png",
          title: "Raijins - Volume 1 (Jade Edition)",
        },
        {
          id: 10,
          image: n.p + "static/media/Raffle10.ad4fb7943972d980c570.png",
          title: "Raijins - Volume 1 (Ghost Edition)",
        },
        {
          id: 11,
          image: n.p + "static/media/Raffle11.6dcf5892f615c599f3c8.png",
          title: "Raijins - Volume 2 (First Edition)",
        },
        {
          id: 12,
          image: n.p + "static/media/Raffle12.2bc9d353ffbfa671a39e.png",
          title: "Raijins - Volume 2 (Tamahagane Edition)",
        },
        {
          id: 13,
          image: n.p + "static/media/Raffle13.80350dfaa3494897f5b0.png",
          title: "Raijins - Volume 2 (Jade Edition)",
        },
        {
          id: 14,
          image: n.p + "static/media/Raffle14.376d7a2f2d7ecb4be4fd.png",
          title: "Raijins - Volume 2 (Ghost Edition)",
        },
        {
          id: 15,
          image: n.p + "static/media/Raffle15.e763162141cd3e3cbae8.png",
          title: "Raijins - Volume 3 (First Edition)",
        },
        {
          id: 16,
          image: n.p + "static/media/Raffle16.bfaf9f2321ab4beb4ee3.png",
          title: "Raijins - Volume 3 (Tamahagane Edition)",
        },
        {
          id: 17,
          image: n.p + "static/media/Raffle17.0beb0d30f76723b3cb6c.png",
          title: "Raijins - Volume 3 (Jade Edition)",
        },
        {
          id: 18,
          image: n.p + "static/media/Raffle18.c20674213869c8aefcaa.png",
          title: "Raijins - Volume 3 (Ghost Edition)",
        },
        {
          id: 19,
          image: n.p + "static/media/Raffle19.9f92264a5bc1b208fb43.png",
          title: "Raijins - Reaper NFT",
        },
        {
          id: 20,
          image: n.p + "static/media/Raffle20.543fccaf97e8dff6746f.png",
          title: "Raijins - Human NFT",
        },
      ];
    },
    568: function (e, t, n) {
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var a = l(n(2791)),
        r = l(n(6998)),
        s = ["text", "onCopy", "options", "children"];
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function d(e, t) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          d(e, t)
        );
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f(e);
          if (t) {
            var r = f(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === i(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return m(e);
          })(this, n);
        };
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          f(e)
        );
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var T = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && d(e, t);
        })(p, e);
        var t,
          n,
          i,
          l = y(p);
        function p() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, p);
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i];
          return (
            b(
              m((e = l.call.apply(l, [this].concat(n)))),
              "onClick",
              function (t) {
                var n = e.props,
                  i = n.text,
                  s = n.onCopy,
                  l = n.children,
                  p = n.options,
                  o = a.default.Children.only(l),
                  u = (0, r.default)(i, p);
                s && s(i, u),
                  o &&
                    o.props &&
                    "function" === typeof o.props.onClick &&
                    o.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (t = p),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = u(e, s),
                  i = a.default.Children.only(t);
                return a.default.cloneElement(
                  i,
                  o(o({}, n), {}, { onClick: this.onClick })
                );
              },
            },
          ]) && c(t.prototype, n),
          i && c(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          p
        );
      })(a.default.PureComponent);
      (t.CopyToClipboard = T),
        b(T, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    8029: function (e, t, n) {
      var i = n(568).CopyToClipboard;
      (i.CopyToClipboard = i), (e.exports = i);
    },
    3732: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"WithdrawAll","type":"event"},{"inputs":[{"internalType":"uint256","name":"_indexRaffle","type":"uint256"},{"internalType":"uint256","name":"_ticketCnt","type":"uint256"}],"name":"addTicket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cntRaffles","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decideWinners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAccount","type":"address"}],"name":"getRaffleInfo","outputs":[{"components":[{"internalType":"string","name":"value","type":"string"},{"internalType":"int256","name":"winnerIndex","type":"int256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"totalTicketCnt","type":"uint256"},{"internalType":"uint256","name":"ticketCntForUser","type":"uint256"},{"internalType":"bool","name":"isDecided","type":"bool"},{"internalType":"bool","name":"isDisabled","type":"bool"},{"internalType":"uint256","name":"timeStarted","type":"uint256"},{"internalType":"uint256","name":"timeDecided","type":"uint256"}],"internalType":"struct RaffleRaijins.RaffleStatus[]","name":"_rafflesForUser","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_indexRaffle","type":"uint256"},{"internalType":"uint256","name":"_totalTickets","type":"uint256"}],"name":"getRandomNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raijinsTicketAddress","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"period","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"raffleInfo","outputs":[{"internalType":"string","name":"value","type":"string"},{"internalType":"int256","name":"winnerIndex","type":"int256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"totalTicketCnt","type":"uint256"},{"internalType":"bool","name":"isDecided","type":"bool"},{"internalType":"bool","name":"isDisabled","type":"bool"},{"internalType":"uint256","name":"timeStarted","type":"uint256"},{"internalType":"uint256","name":"timeDecided","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setRaijinsTicketAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setPeriodToDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cntRaffles","type":"uint256"}],"name":"setRaffleCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_raffleIndex","type":"uint256"},{"internalType":"bool","name":"_isDisabled","type":"bool"}],"name":"setRaffleDisable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_raffleIndex","type":"uint256"},{"internalType":"string","name":"_raffleValue","type":"string"}],"name":"setRaffleValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_waitingPeriod","type":"uint256"}],"name":"setWaitingPeriodForNextRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startRaffles","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waitingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawRaijinsTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    1855: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
  },
]);
//# sourceMappingURL=258.5f3c96db.chunk.js.map
