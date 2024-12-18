配点 : $400$ 点

## 問題文

$1$ 個の $0$ のみからなる数列 $A=(0)$ があります。<br>
また、`L` と `R` のみからなる長さ $N$ の文字列 $S=s_1s_2\ldots s_N$ が与えられます。  

$i=1,2,\ldots ,N$ の順番で、次の操作を行います。  

- $s_i$ が `L` のとき、$A$ 内にある $i-1$ のすぐ左に $i$ を挿入する
- $s_i$ が `R` のとき、$A$ 内にある $i-1$ のすぐ右に $i$ を挿入する

最終的な $A$ を求めてください。

## 制約

- $1\leq N \leq 5\times 10^5$
- $N$ は整数である
- $|S| = N$
- $s_i$ は `L` か `R` のいずれかである

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

最終的な $A$ を空白区切りで出力せよ。

```input1
5
LRRLR
```

```output1
1 2 4 5 3 0
```

はじめ、$A=(0)$ です。<br>
$s_1$ が `L` なので、$A=(1,0)$ となります。<br>
$s_2$ が `R` なので、$A=(1,2,0)$ となります。<br>
$s_3$ が `R` なので、$A=(1,2,3,0)$ となります。<br>
$s_4$ が `L` なので、$A=(1,2,4,3,0)$ となります。<br>
$s_5$ が `R` なので、$A=(1,2,4,5,3,0)$ となります。  

```input2
7
LLLLLLL
```

```output2
7 6 5 4 3 2 1 0
```