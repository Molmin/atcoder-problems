配点: $600$ 点

## 問題文

AtCoder 本社は $N$ 室の部屋からなる施設であり、部屋には $1$ から $N$ の番号がついています。どの $2$ 部屋の間にも、それらを直接結ぶ通路が $1$ 本通っています。

社長の高橋君はセキュリティのため、全ての通路に **レベル** を設定するようあなたに依頼しました。ここで、レベルは正の整数値であり、以下の条件を満たさなければなりません。

- 全ての部屋 $i\ (1 \leq i \leq N)$ について、部屋 $i$ から出発し、レベルが等しい通路のみをいくつか通って部屋 $i$ に戻るとき、通路を通る回数は必ず偶数になる。

あなたの仕事は、通路ごとのレベルをうまく設定して、レベルの最大値を最小化することです。

## 制約

- $N$ は $2$ 以上 $500$ 以下の整数

## 入力

入力は以下の形式で標準入力から与えられます。

> $N$

## 出力

目的を達成するような設定の仕方を次のように出力してください。

> $a_{1,2}$ $a_{1,3}$ ... $a_{1,N}$
> 
> $a_{2,3}$ ... $a_{2,N}$
> 
> .
> 
> .
> 
> .
> 
> $a_{N-1,N}$

ここで、$a_{i,j}$ は部屋 $i$ と部屋 $j$ の間の通路に設定するレベルです。

答えが複数ありえる場合、どれを出力してもかまいません。

```input1
3
```

```output1
1 2
1
```

この出力例は下の画像のようになります。

![](https://img.atcoder.jp/jsc2019-qual/D-sample.png)

たとえば部屋 $2$ から出発して、$2 \to 3 \to 2 \to 3 \to 2 \to 1 \to 2$ という経路でレベル $1$ の通路のみを通って元の部屋に戻るとき、通路を通る回数は $6$ 回です。