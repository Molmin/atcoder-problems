配点 : $300$ 点

## 問題文

フェネックは $N$ 体のモンスターと戦っています。

$i$ 番目のモンスターの体力は $H_i$ です。

フェネックは次の $2$ 種類の行動を行うことができます。

- 攻撃：モンスターを $1$ 体選んで攻撃することで、そのモンスターの体力を $1$ 減らす
- 必殺技：モンスターを $1$ 体選んで必殺技を使うことで、そのモンスターの体力を $0$ にする

攻撃と必殺技以外の方法でモンスターの体力を減らすことはできません。

全てのモンスターの体力を $0$ 以下にすればフェネックの勝ちです。

フェネックが $K$ 回まで必殺技を使えるとき、モンスターに勝つまでに行う攻撃の回数 (必殺技は数えません) の最小値を求めてください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq K \leq 2 \times 10^5$
- $1 \leq H_i \leq 10^9$
- 入力中のすべての値は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $H_1$ $...$ $H_N$

## 出力

フェネックがモンスターに勝つまでに行う攻撃の回数 (必殺技は数えない) の最小値を出力せよ。

```input1
3 1
4 1 5
```

```output1
5
```

$3$ 番目のモンスターに必殺技を使い、$1$ 番目のモンスターに $4$ 回、$2$ 番目のモンスターに $1$ 回攻撃を行うことで、攻撃の回数を $5$ 回にできます。

```input2
8 9
7 9 3 2 3 8 4 6
```

```output2
0
```

全てのモンスターに必殺技を使うことができます。

```input3
3 0
1000000000 1000000000 1000000000
```

```output3
3000000000
```

オーバーフローに注意してください。