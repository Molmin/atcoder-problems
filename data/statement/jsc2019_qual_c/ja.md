配点 : $500$ 点

## 問題文

$2N$ 個のマスが左右一列に並んでおり、各マスの色を表す長さ $2N$ の文字列 $S$ が与えられます。

左から $i$ 番目のマスの色は、$S$ の $i$ 文字目が `B` のとき黒色で、`W` のとき白色です。

あなたは異なる $2$ マスを選んで、それらのマスおよびそれらの間にあるマスの色を反転する操作をちょうど $N$ 回行います。
ここで、マスの色を反転するとは、そのマスの色が黒色なら白色に、白色なら黒色にすることです。

ただし、操作を通して同じマスを $2$ 回以上選ぶことはできません。
つまり、各マスがちょうど $1$ 回ずつ選ばれることになります。

$N$ 回の操作終了後に全てのマスを白色にする方法が何通りあるかを $10^9+7$ で割った余りを求めてください。

ここで、条件を満たす $2$ つの方法が異なるとは、$1$ つ目の方法で $i$ 番目に選んだ $2$ つのマスの組と $2$ つ目の方法で $i$ 番目に選んだ $2$ つのマスの組が異なるような $i$ $(1 \leq i \leq N)$ が存在することをいいます。

## 制約

- $1 \leq N \leq 10^5$
- $|S| = 2N$
- $S$ の各文字は `B` または `W` である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

$N$ 回の操作終了後に全てのマスを白色にする方法の個数を $10^9+7$ で割った余りを出力せよ。そのような方法が存在しない場合、代わりに $0$ を出力せよ。

```input1
2
BWWB
```

```output1
4
```

全てのマスを白色にする方法は次の $4$ 通りあります。

- 最初の操作では $1, 3$ 番目のマスを選び、次の操作では $2, 4$ 番目のマスを選びます。
- 最初の操作では $2, 4$ 番目のマスを選び、次の操作では $1, 3$ 番目のマスを選びます。
- 最初の操作では $1, 4$ 番目のマスを選び、次の操作では $2, 3$ 番目のマスを選びます。
- 最初の操作では $2, 3$ 番目のマスを選び、次の操作では $1, 4$ 番目のマスを選びます。

```input2
4
BWBBWWWB
```

```output2
288
```

```input3
5
WWWWWWWWWW
```

```output3
0
```