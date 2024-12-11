配点 : $200$ 点

## 問題文

カツサンドくんはオムライスが好きです。

他にも明太子や寿司、クリームブリュレやテンダーロインステーキなどが好きで、これらの食べ物は全て、誰もが好きだと信じています。

その仮説を証明するために、$N$ 人の人に $M$ 種類の食べ物について好きか嫌いかの調査を行いました。

調査の結果、$i$ 番目の人は $A_{i1}$ 番目, $A_{i2}$ 番目, $...$, $A_{iK_i}$ 番目の食べ物だけ好きだと答えました。

$N$ 人全ての人が好きだと答えた食べ物の種類数を求めてください。

## 制約

- 入力は全て整数である。
- $1 \leq N, M \leq 30$
- $1 \leq K_i \leq M$
- $1 \leq A_{ij} \leq M$
- 各 $i$ $(1 \leq i \leq N)$ について $A_{i1}, A_{i2}, ..., A_{iK_i}$ は全て異なる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $K_1$ $A_{11}$ $A_{12}$ $...$ $A_{1K_1}$
> 
> $K_2$ $A_{21}$ $A_{22}$ $...$ $A_{2K_2}$
> 
> $:$
> 
> $K_N$ $A_{N1}$ $A_{N2}$ $...$ $A_{NK_N}$

## 出力

$N$ 人全ての人が好きだと答えた食べ物の種類数を出力せよ。

```input1
3 4
2 1 3
3 1 2 3
2 3 2
```

```output1
1
```

$3$ 人全員が好きだと答えた食べ物は $3$ 番目の食べ物だけなので $1$ を出力します。

```input2
5 5
4 2 3 4 5
4 1 3 4 5
4 1 2 4 5
4 1 2 3 5
4 1 2 3 4
```

```output2
0
```

カツサンドくんの仮説は全く正しくありませんでした。

```input3
1 30
3 5 10 30
```

```output3
3
```