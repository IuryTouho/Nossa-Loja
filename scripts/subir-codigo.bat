@echo off
@REM Mudança de charset para UTF-8
chcp 65001 >nul
SETLOCAL ENABLEDELAYEDEXPANSION

set "nomeUsr=%username%"
CALL :toLower nomeUsr

set "nomeBranch=%nomeUsr%"

git config user.name "%nomeUsr%"
git config user.email "%nomeUsr%@timeangular.com.br"

git branch "%nomeBranch%" >nul 2>nul

call :setErr 0

git checkout "%nomeBranch%" >nul 2>nul
@REM git switch -c %nomeUsr%
if errorlevel 1 goto falha

echo Informe um comentário sobre essa atualização de código e tecle <ENTER>
set /p msgCommit=Comentário:
If /I "%msgCommit%"=="" set "msgCommit=Subir código via script"

git add ../. >nul
git commit -m "%msgCommit%" >nul

git push -u origin "%nomeBranch%" >nul

echo ### Código atualizado com sucesso!!! ###

pause

goto fim

:falha

@echo ### Processo abortado, execute-me novamente informando o número da OS e nome do cliente ###

:fim

exit

:setErr
exit /b %1

:toLower str -- converts uppercase character to lowercase

@REM ::           -- str [in,out] - valref of string variable to be converted
@REM :$created 20060101 :$changed 20080219 :$categories StringManipulation
@REM :$source https://www.dostips.com

if not defined %~1 EXIT /b
for %%a in (
  "A=a" "B=b" "C=c" "D=d" "E=e" "F=f" "G=g" "H=h" "I=i"
  "J=j" "K=k" "L=l" "M=m" "N=n" "O=o" "P=p" "Q=q" "R=r"
  "S=s" "T=t" "U=u" "V=v" "W=w" "X=x" "Y=y" "Z=z" "Ä=ä"
  "Ö=ö" "Ü=ü"
) do (
  call set %~1=%%%~1:%%~a%%
)

EXIT /b
