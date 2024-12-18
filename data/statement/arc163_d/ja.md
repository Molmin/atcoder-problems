配点 : $700$ 点

## 問題文

以下の条件を全て満たす頂点に $1$ から $N$ までの番号がついた $N$ 頂点の有向グラフ $G$ を考えます。

- <p>$G$ はトーナメントである。すなわち、$G$ に多重辺や自己ループはなく、$G$ のどの $2$ 頂点 $u,v$ に対しても、$u \rightarrow v$ 辺または $v \rightarrow u$ 辺のうちちょうど片方が存在する。</p>
- <p>$G$ の辺のうち、頂点番号が小さい方から大きい方へ向けられた辺はちょうど $M$ 本存在する。</p>

そのような有向グラフ $G$ 全てに対する強連結成分の個数の総和を $998244353$ で割ったあまりを求めてください。

## 制約

- $1 \le N \le 30$
- $0 \le M \le \frac{N(N-1)}{2}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$

## 出力

答えを出力せよ。

```input1
3 1
```

```output1
7
```

条件を満たす有向グラフ $G$ は以下の $3$ 個です。それぞれ強連結成分の個数は $3,1,3$ であるため答えは $7$ です。

![](https://img.atcoder.jp/arc163/ee8acabc2a7d48164b3cc568e88f0840.png)

```input2
6 2
```

```output2
300
```

```input3
25 156
```

```output3
902739687
```