配点 : $1900$ 点

## 問題文

$N$ 頂点の木があります。
頂点は $1$ から $N$ まで番号が振られています。
各 $1 \leq i \leq N - 1$ について、$i$ 番目の辺は頂点 $a_i$ と $b_i$ を繋いでいます。
辺の長さはすべて $1$ です。

いくつかの頂点はすぬけ君のお気に入りです。
お気に入りの頂点の情報は、長さ $N$ の文字列 $s$ として与えられます。
各 $1 \leq i \leq N$ について、頂点 $i$ がお気に入りならば $s_i$ は `1` で、頂点 $i$ がお気に入りでないならば $s_i$ は `0` です。

最初、頂点はすべて白色です。
すぬけ君は次の操作をちょうど $1$ 回だけ行います。

- お気に入りの頂点 $v$ をひとつ選び、非負整数 $d$ をひとつ選ぶ。 頂点 $v$ から距離 $d$ 以内の頂点をすべて黒く塗る。

最終的な頂点の色の組合せとして考えられるものは何通りか求めてください。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq a_i, b_i \leq N$
- グラフは木である。
- $|s| = N$
- $s$ は `0` と `1` のみからなる。
- $s$ には `1` が含まれる。

## 部分点

- $1300$ 点分のデータセットでは、$s$ は `1` のみからなる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $:$
> 
> $a_{N - 1}$ $b_{N - 1}$
> 
> $s$

## 出力

最終的な頂点の色の組合せとして考えられるものは何通りか出力せよ。

```input1
4
1 2
1 3
1 4
1100
```

```output1
4
```

次の $4$ 通りです。

![334d566ec1f4f38d23cd580044f1cd07.png](https://atcoder.jp/img/agc008/334d566ec1f4f38d23cd580044f1cd07.png)

```input2
5
1 2
1 3
1 4
4 5
11111
```

```output2
11
```

このケースは部分点の制約を満たします。

```input3
6
1 2
1 3
1 4
2 5
2 6
100011
```

```output3
8
```