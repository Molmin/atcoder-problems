配点 : $500$ 点

## 問題文

$1,2,\ldots,N$ の番号がついた $N$ 個のかごが円状に置かれています。<br>
$1\leq i \leq N-1$ についてかご $i$ の右隣にはかご $i+1$ があり、かご $N$ の右隣にはかご $1$ があります。

かご $i$ の中には $A_i$ 個りんごが入っています。

高橋君は最初かご $1$ の前におり、以下の行動を繰り返します。

- 目の前にあるかごの中にりんごがあれば $1$ 個かごから取り出して食べる。その後、りんごを食べたかどうかにかかわらず、右隣のかごの前に移動する。

高橋君がちょうど $K$ 個のりんごを食べた時点で、各かごの中に残っているりんごの個数を求めてください。

## 制約

- $1 \leq N \leq 10^5$
- $0 \leq A_i \leq 10^{12}$
- $1 \leq K \leq 10^{12}$
- りんごは全部で $K$ 個以上ある。すなわち、$\sum_{i=1}^{N}A_i\geq K$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

$N$ 個の整数を空白区切りで出力せよ。<br>
$i$ 番目には、高橋君がちょうど $K$ 個のりんごを食べた時点で、かご $i$ の中に残っているりんごの個数を出力せよ。

```input1
3 3
1 3 0
```

```output1
0 1 0
```

高橋君は次のように行動します。

- 目の前にあるかご $1$ の中にりんごがあるので $1$ 個かごから取り出して食べる。その後、かご $2$ の前に移動する。この時点で各かごの中のりんごの個数は $(0,3,0)$ である。
- 目の前にあるかご $2$ の中にりんごがあるので $1$ 個かごから取り出して食べる。その後、かご $3$ の前に移動する。この時点で各かごの中のりんごの個数は $(0,2,0)$ である。
- 目の前にあるかご $3$ の中にりんごはない。かご $1$ の前に移動する。この時点で各かごの中のりんごの個数は $(0,2,0)$ である。
- 目の前にあるかご $1$ の中にりんごはない。かご $2$ の前に移動する。この時点で各かごの中のりんごの個数は $(0,2,0)$ である。
- 目の前にあるかご $2$ の中にりんごがあるので $1$ 個かごから取り出して食べる。その後、かご $3$ の前に移動する。この時点で各かごの中のりんごの個数は $(0,1,0)$ である。

```input2
2 1000000000000
1000000000000 1000000000000
```

```output2
500000000000 500000000000
```