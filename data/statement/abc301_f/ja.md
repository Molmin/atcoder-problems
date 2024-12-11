配点 : $500$ 点

## 問題文

英大文字・英小文字からなる長さ $4$ の文字列で、以下の $2$ 条件をともに満たすものを `DDoS` 型文字列と呼ぶことにします。

- $1,2,4$ 文字目が英大文字で、$3$ 文字目が英小文字である
- $1,2$ 文字目が等しい

例えば `DDoS`, `AAaA` は `DDoS` 型文字列であり、`ddos`, `IPoE` は `DDoS` 型文字列ではありません。

英大文字・英小文字および `?` からなる文字列 $S$ が与えられます。
$S$ に含まれる `?` を独立に英大文字・英小文字に置き換えてできる文字列は、$S$ に含まれる `?` の個数を $q$ として $52^q$ 通りあります。
このうち `DDoS` 型文字列を部分列に含まないものの個数を $998244353$ で割ったあまりを求めてください。

## 注記

文字列の**部分列**とは、文字列から $0$ 個以上の文字を取り除いた後、残りの文字を元の順序で連結して得られる文字列のことをいいます。<br>
例えば、`AC` は `ABC` の部分列であり、`RE` は `ECR` の部分列ではありません。

## 制約

- $S$ は英大文字・英小文字および `?` からなる
- $S$ の長さは $4$ 以上 $3\times 10^5$ 以下

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

答えを出力せよ。  

```input1
DD??S
```

```output1
676
```

`?` の少なくとも一方が英小文字のとき、`DDoS` 型文字列を部分列に含みます。

```input2
????????????????????????????????????????
```

```output2
858572093
```

$998244353$ で割ったあまりを求めてください。

```input3
?D??S
```

```output3
136604
```