配点 : $600$ 点

## 問題文

$N$ 人の生徒が登校しようとしています。生徒 $i$ はクラス $C_i$ に属しています。

各生徒はそれぞれの家から出発したあと、他の生徒と合流を繰り返しながら学校へ向かいます。一度合流した生徒が分かれることはありません。

$Q$ 個のクエリが与えられるので、順番に処理してください。クエリには $2$ 種類あり、入力形式とクエリの内容は以下の通りです。

- `1 a b` : 生徒 $a$ を含む集団と、生徒 $b$ を含む集団が合流する (既に合流しているときは何も起こらない)
- `2 x y` : クエリの時点で既に生徒 $x$ と合流している生徒(生徒 $x$ を含む)のうち、クラス $y$ に属している生徒の数を求める

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq C_i,a,b,x,y \leq N$
- `1 a b` のクエリにおいて、$a \neq b$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $Q$
> 
> $C_1$ $\ldots$ $C_N$
> 
> $Query_1$
> 
> $\vdots$
> 
> $Query_Q$

## 出力

`2 x y` のクエリに対する答えを、$1$ 行に $1$ つずつ、順に出力せよ。

```input1
5 5
1 2 3 2 1
1 1 2
1 2 5
2 1 1
1 3 4
2 3 4
```

```output1
2
0
```

$3$ 番目のクエリの時点で、生徒 $1$ は、生徒 $2,5$ と合流しています。生徒 $1,2,5$ のうちクラス $1$ に属する生徒は $2$ 人です。

$5$ 番目のクエリの時点で、生徒 $3$ は、生徒 $4$ と合流しています。生徒 $3,4$ のうちクラス $4$ に属する生徒は $0$ 人です。

```input2
5 4
2 2 2 2 2
1 1 2
1 1 3
1 2 3
2 2 2
```

```output2
3
```

すでに同じ集団に属している生徒に対して、`1 a b` のクエリが与えられることもあります。

```input3
12 9
1 2 3 1 2 3 1 2 3 1 2 3
1 1 2
1 3 4
1 5 6
1 7 8
2 2 1
1 9 10
2 5 6
1 4 8
2 6 1
```

```output3
1
0
0
```