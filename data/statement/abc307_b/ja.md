配点 : $200$ 点

## 問題文

英小文字のみからなる $N$ 個の文字列 $S_1,S_2,\ldots,S_N$ が与えられます。<br>
$1$ 以上 $N$ 以下の **相異なる** 整数 $i,j$ であって、$S_i$ と $S_j$ をこの順に連結した文字列が回文となるようなものが存在するか判定してください。

ただし、長さ $M$ の文字列 $T$ が回文であるとは、任意の $1\leq i\leq M$ について、$T$ の $i$ 文字目と $(M+1-i)$ 文字目が一致していることをいいます。

## 制約

- $2\leq N\leq 100$
- $1\leq \lvert S_i\rvert \leq 50$
- $N$ は整数
- $S_i$ は英小文字のみからなる文字列
- $S_i$ はすべて異なる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## 出力

問題文の条件をみたす $i,j$ が存在するならば `Yes` を、そうでないならば `No` を出力せよ。

```input1
5
ab
ccef
da
a
fe
```

```output1
Yes
```

$(i,j)=(1,4)$ とすると、$S_1=$`ab` と $S_4=$`a` をこの順に連結した文字列は `aba` となり、
これは回文であるため条件をみたしています。<br>
よって、`Yes` を出力します。  

また、$(i,j)=(5,2)$ としても、$S_5=$`fe` と $S_2=$`ccef` をこの順に連結した文字列は `feccef` となり、やはり条件をみたしています。

```input2
3
a
b
aba
```

```output2
No
```

$S_1$, $S_2$, $S_3$ のうち、どの相異なる $2$ つの文字列を繋げても回文となりません。
よって、`No` を出力します。<br>
問題文における $i,j$ は相異なる必要があることに注意してください。

```input3
2
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

```output3
Yes
```